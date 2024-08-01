import SignUp from "../../../pageElements/SignUp";

//https://tdlschool.atlassian.net/browse/TSS22N-60

describe("sign up with registered email", () => {
  const USERNAME = Cypress.env("username");
  beforeEach(() => {
    cy.visit("/sign-up");
    cy.contains("h1", "Become a Store of Excellence Member");
  });

  it("fills out mandatory fields in registration form with already registered user email ", () => {
    SignUp.elements.firstNameInput().clear().type("Maksis");
    SignUp.elements.lastNameInput().clear().type("Paksis");
    SignUp.elements.emailInput().clear().type(USERNAME);
    SignUp.elements.passwordInput().clear().type("123");
    SignUp.elements.joinButton().click();
    SignUp.elements.signUpError().contains("email already has an account");
  });
});
