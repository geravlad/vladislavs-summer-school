class Checkout {
    elements = {
        firstNameField: () => cy.getByTestId('shipping-first-name-input'),
        lastNameField: () => cy.getByTestId('shipping-last-name-input'),
        addressField: () => cy.getByTestId('shipping-address-input'),
        postalCodeField: () => cy.getByTestId('shipping-postal-code-input'),
        cityField: () => cy.getByTestId('shipping-city-input'),
        countrySelectButton: () => cy.get('select'),
        toDeliveryButton: () => cy.getByTestId('submit-address-button'),
        deliveryTypeButton: (option) => cy.getByTestId('delivery-option-radio').contains(option),
        toPaymentButton: () => cy.getByTestId('submit-delivery-option-button'),
        toReviewButton: () => cy.getByTestId('submit-payment-button'),
        placeOrderButton: () => cy.getByTestId('submit-order-button')
    }
}

export default new Checkout();