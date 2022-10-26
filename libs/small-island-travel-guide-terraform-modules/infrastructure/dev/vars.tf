variable "AWS_ACCESS_KEY" {
    type= string
}

variable "AWS_SECRET_KEY" {
     type= string
}

variable "AWS_REGION" {
  type = string
  default = "eu-west-1"
}

variable "account_id"{
  type        = string
  description = "The account ID in which to create/manage resources"
}