terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "> 4.0.0"
    }
    archive = {
      source  = "hashicorp/archive"
      version = "> 2.0.0"
    }
  }
}

provider "aws" {
  access_key = var.AWS_ACCESS_KEY
  secret_key = var.AWS_SECRET_KEY
  region     = var.AWS_REGION
}
