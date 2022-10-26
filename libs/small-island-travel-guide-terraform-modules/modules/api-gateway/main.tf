// https://hands-on.cloud/managing-amazon-api-gateway-using-terraform/#h-setting-up-a-domain-name-for-the-api
resource "aws_api_gateway_rest_api" "api_gateway_rest_api"{
    name = var.api_gateway_rest_api_name
}

resource "aws_api_gateway_resource" "api_gateway_rest_api_resource" {
  rest_api_id = aws_api_gateway_rest_api.api_gateway_rest_api.id
  parent_id = aws_api_gateway_rest_api.api_gateway_rest_api.root_resource_id
  path_part = "hosts"
}

resource "aws_api_gateway_method" "api_gateway_rest_api_get_method" {
  rest_api_id = aws_api_gateway_rest_api.api_gateway_rest_api.id
  resource_id = aws_api_gateway_resource.api_gateway_rest_api_resource.id
  http_method = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "api_gateway_rest_api_get_method_integration" {
  rest_api_id = aws_api_gateway_rest_api.api_gateway_rest_api.id
  resource_id = aws_api_gateway_resource.api_gateway_rest_api_resource.id
  http_method = aws_api_gateway_method.api_gateway_rest_api_get_method.http_method
  //request_tempates is required to explicitly set the statusCode to an integer value of 200
   request_templates = {
    "application/json" = jsonencode({
      statusCode = 200
    })
  }
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = var.lambda_function_arn
}

resource "aws_api_gateway_method_response" "api_gateway_rest_api_get_method_response_200" {
  rest_api_id = aws_api_gateway_rest_api.api_gateway_rest_api.id
  resource_id = aws_api_gateway_resource.api_gateway_rest_api_resource.id
  http_method = aws_api_gateway_method.api_gateway_rest_api_get_method.http_method
  status_code = "200"
}

# //  Creating a lambda resource based policy to allow API gateway to invoke the lambda function:
resource "aws_lambda_permission" "api_gateway_lambda" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = var.lambda_function_name
  principal     = "apigateway.amazonaws.com"
  source_arn = "arn:aws:execute-api:${var.api_gateway_region}:${var.api_gateway_account_id}:${aws_api_gateway_rest_api.api_gateway_rest_api.id}/*/${aws_api_gateway_method.api_gateway_rest_api_get_method.http_method}${aws_api_gateway_resource.api_gateway_rest_api_resource.path}"
}

resource "aws_api_gateway_deployment" "api_gateway_rest_api_deployment" {
  rest_api_id = aws_api_gateway_rest_api.api_gateway_rest_api.id
  triggers = {
    redeployment = sha1(jsonencode([
      aws_api_gateway_resource.api_gateway_rest_api_resource.id,
      aws_api_gateway_method.api_gateway_rest_api_get_method.id,
      aws_api_gateway_integration.api_gateway_rest_api_get_method_integration.id
    ]))
  }
}

resource "aws_api_gateway_stage" "api_gateway_rest_api_stage" {
  deployment_id = aws_api_gateway_deployment.api_gateway_rest_api_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.api_gateway_rest_api.id
  stage_name    = var.rest_api_stage_name
}