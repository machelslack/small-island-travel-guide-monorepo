output "rest_api_url" {
  value = "${aws_api_gateway_deployment.api_gateway_rest_api_deployment.invoke_url}${aws_api_gateway_stage.api_gateway_rest_api_stage.stage_name}${aws_api_gateway_resource.api_gateway_rest_api_resource.path}"
}