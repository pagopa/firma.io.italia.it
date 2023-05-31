resource "azuread_application" "environment_live" {
  display_name = "${local.app_name}-live"
}

resource "azuread_service_principal" "environment_live" {
  application_id = azuread_application.environment_live.application_id
}

resource "azuread_application_federated_identity_credential" "environment_live" {
  application_object_id = azuread_application.environment_live.object_id
  display_name          = "github-federated"
  description           = "github-federated"
  audiences             = ["api://AzureADTokenExchange"]
  issuer                = "https://token.actions.githubusercontent.com"
  subject               = "repo:${var.github.org}/${var.github.repository}:environment:live-${var.env}"
}

resource "azurerm_role_assignment" "environment_live_subscription" {
  scope                = data.azurerm_subscription.current.id
  role_definition_name = "Reader"
  principal_id         = azuread_service_principal.environment_live.object_id
}

resource "azurerm_role_assignment" "environment_live_storage_account" {
  scope                = data.azurerm_storage_account.live.id
  role_definition_name = "Contributor"
  principal_id         = azuread_service_principal.environment_live.object_id
}

resource "azurerm_role_assignment" "environment_live_cdn_profile" {
  scope                = data.azurerm_cdn_profile.live.id
  role_definition_name = "CDN Profile Contributor"
  principal_id         = azuread_service_principal.environment_live.object_id
}

# Data source still not implemented
# https://github.com/hashicorp/terraform-provider-azurerm/issues/8243
# resource "azurerm_role_assignment" "environment_live_cdn_profile" {
#   scope                = data.azurerm_cdn_endpoint.live.id
#   role_definition_name = "CDN Endpoint Contributor"
#   principal_id         = azuread_service_principal.environment_live.object_id
# }

output "azure_environment_live" {
  value = {
    app_name       = "${local.app_name}-live"
    client_id      = azuread_service_principal.environment_live.application_id
    application_id = azuread_service_principal.environment_live.application_id
    object_id      = azuread_service_principal.environment_live.object_id
  }
}
