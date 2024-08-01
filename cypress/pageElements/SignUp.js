class SignUp {
    elements = {
      firstNameInput: () => cy.getByTestId("first-name-input"),
      lastNameInput: () => cy.getByTestId("last-name-input"),
      emailInput: () => cy.getByTestId("email-input"),
      phoneInput: () => cy.getByTestId("phone-input"),
      passwordInput: () => cy.getByTestId("password-input"),
      joinButton: () => cy.getByTestId("register-button"),
      signUpError: () => cy.getByTestId("register-error")
    };
  
    // fillEmail(email) {
    //   this.elements.emailInput().clear().type(email);
    // }
  
    // fillPassword(password) {
    //   this.elements.passwordInput().clear().type(password);
    // }
}
  
  export default new SignUp();