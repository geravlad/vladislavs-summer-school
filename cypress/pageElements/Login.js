class Login {
  elements = {
    emailInput: () => cy.getByTestId("email-input"),
    passwordInput: () => cy.getByTestId("password-input"),
    signInButton: () => cy.getByTestId("sign-in-button"),
    titleLink: () => cy.get("h1"),
  };

  fillEmail(email) {
    this.elements.emailInput().clear().type(email);
  }

  fillPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }
}

export default new Login();
