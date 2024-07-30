import Home from "../pageElements/Home";
import Login from "../pageElements/Login";
import Checkout from "../pageElements/Checkout";

Cypress.Commands.add("getByTestId", (id) => {
  cy.get(`[data-testid=${id}]`);
});

Cypress.Commands.add("login", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("/");
    Login.elements.emailInput().type(username);
    Login.elements.passwordInput().type(password);
    Login.elements.signInButton().click();
    Home.elements.headerLink().should("be.visible");
  });
});

Cypress.Commands.add("form", (firstname, lastname, address, zip, city) => {
  Checkout.elements.firstNameField().clear().type(firstname);
  Checkout.elements.lastNameField().clear().type(lastname);
  Checkout.elements.addressField().clear().type(address);
  Checkout.elements.postalCodeField().clear().type(zip);
  Checkout.elements.cityField().clear().type(city);
  Checkout.elements.countrySelectButton().select("Latvia");
  Checkout.elements.toDeliveryButton().click();
});
