module "api_gateway" {
  source = "../../modules/api-gateway"
  api_gateway_region = var.AWS_REGION
  api_gateway_account_id = var.account_id
  lambda_function_name = module.lambda_function.lambda_function_name
  lambda_function_arn = module.lambda_function.lambda_function_arn

  depends_on = [
    module.lambda_function
  ]
}

module "lambda_function" {
  source = "../../modules/lambda-function"
}