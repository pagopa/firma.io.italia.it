locals {
  # tflint-ignore: terraform_unused_declarations
  prefix = "${var.prefix}-${var.env_short}"
  # tflint-ignore: terraform_unused_declarations
  project  = "${var.prefix}-${var.env_short}-${var.domain}"
  app_name = "github-${var.github.org}-${var.github.repository}-${var.env}"
}
