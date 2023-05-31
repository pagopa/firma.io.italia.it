data "azurerm_storage_account" "live" {
  name                = "${replace(local.project, "-", "")}landingsa"
  resource_group_name = "${local.project}-integration-rg"
}

data "azurerm_cdn_profile" "live" {
  name                = "${local.project}-landing-cdn-profile"
  resource_group_name = "${local.project}-integration-rg"
}

# Data source still not implemented
# https://github.com/hashicorp/terraform-provider-azurerm/issues/8243
# data "azurerm_cdn_endpoint" "live" {
#   name                = "${local.project}-landing-cdn-profile/${local.project}-landing-cdn-endpoint"
#   profile_name        = "${local.project}-landing-cdn-profile"
#   resource_group_name = "${local.project}-integration-rg"
# }
