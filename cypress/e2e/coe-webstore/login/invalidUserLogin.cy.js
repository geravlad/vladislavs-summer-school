import Login from "../../../pageElements/Login";

//https://tdlschool.atlassian.net/browse/TSS22N-19

describe("login functionality with invalid user credentials", () => {
    const USERNAME = Cypress.env("invalidUsername");
    const PASSWORD = Cypress.env("invalidPassword");
    beforeEach(() => {
        cy.visit("/");
    });

    it("opens webstores page", () => {
      Login.elements.signInButton("should.be", "visible");
    });

    it("enters invalid user credentials", () => {
        Login.elements.emailInput().type(USERNAME);
        Login.elements.passwordInput().type(PASSWORD);
        Login.elements.signInButton().click();
        Login.elements.loginErrorMessage().should('be.visible').contains('Error: Wrong email or password');
    });

});