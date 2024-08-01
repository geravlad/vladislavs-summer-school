class Cart {
  elements = {
    checkoutButton: () => cy.getByTestId("checkout-button"),
    discountButton: () => cy.getByTestId("add-discount-button"),
    discountInputField: () => cy.getByTestId("discount-input"),
    discountApplyButton: () => cy.getByTestId("discount-apply-button"),
    discountOutput: () => cy.getByTestId("discount-row"),
    removeDiscountButton: () => cy.getByTestId("remove-discount-button"),
    removeProductButton: () => cy.get('[data-testid="product-row"] button'),
  };
}

export default new Cart();
