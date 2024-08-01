import Login from "../../../pageElements/Login";
import SignUp from "../../../pageElements/SignUp";

//https://tdlschool.atlassian.net/browse/TSS22N-51

describe("login functionality", () => {
    const USERNAME = Cypress.env('username') 
    beforeEach(() => {
        cy.visit('/sign-up');
        cy.contains('h1', 'Become a Store of Excellence Member');
    });
  
    it("fills out mandatory fields in registration form with already registered user email ", () => {
        SignUp.elements.joinButton().click();
        SignUp.elements.firstNameInput().invoke('prop', 'validationMessage').should('equal', 'Please fill in this field.');
    });

});