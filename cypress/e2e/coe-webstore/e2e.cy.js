import Cart from "../../pageElements/Cart";
import Checkout from "../../pageElements/Checkout";
import Global from "../../pageElements/Global";
import Home from "../../pageElements/Home";
import Product from "../../pageElements/Product";

describe('End-to-end user flow', () => {
    const USERNAME = Cypress.env('username');
    const PASSWORD = Cypress.env('password');

    beforeEach(() => {
        cy.login(USERNAME, PASSWORD);
    });

    it('selects "sweatpant" product from store', () => {
        cy.visit('/');
        Home.elements.productTitle().contains('Medusa Sweatpants').click();
        Product.elements.sizeButton().contains('M').click();
        Product.elements.addToCartButton().click();
        Home.elements.productQuantity().should('be.visible');
    });

    it('goes to cart & clicks on checkout button', () => {
        cy.visit('/cart');
        Home.elements.cartButton().click();
        Cart.elements.checkoutButton().should('be.visible').click();
        cy.contains('h2', 'Shipping Address');
    });

    it('fills out shipping form', () => {
        cy.visit('/checkout?step=address');
        // cy.form('Tester', 'Teamone', 'Test Adress', '1234', 'TestCity');
        Checkout.elements.firstNameField().clear().type('Tester');
        Checkout.elements.lastNameField().clear().type('Teamone');
        Checkout.elements.addressField().clear().type('Tester');
        Checkout.elements.postalCodeField().clear().type('1234');
        Checkout.elements.cityField().clear().type('TestCity');
        Checkout.elements.countrySelectButton().select('Latvia');
        Checkout.elements.toDeliveryButton().click();
        cy.contains('h2', 'Delivery');
    });

    it('selects delivery type', () => {
        cy.visit('/checkout?step=delivery');
        Checkout.elements.deliveryTypeButton('FakeEx Standard').click();
        Checkout.elements.toPaymentButton().click();
        cy.contains('h2', 'Payment');
    });

    it('submits payment', () => {
        cy.visit('/checkout?step=payment');
        Checkout.elements.toReviewButton().click();
        cy.contains('h2', 'Review');
        Checkout.elements.placeOrderButton().should('be.visible').click();
        cy.contains('h2', 'Summary');
    });

    it('logs out', () => {
        cy.visit('/');
        Global.elements.sideBarBurger().click();
        Global.elements.logOutButton().click();
    });
});