describe('Remove Item from Cart Verification', () => {
    it('allows removing an item from the cart', () => {
      // Step 1: Open the specified page
      cy.visit('/computing-and-internet');
  
      // Step 2: Click on "ADD TO CART"
      cy.get(' #add-to-cart-button-13').first().click();
  
      // Step 3: Click on "Shopping cart" link in the header
      cy.get('span.cart-label').contains('Shopping cart').click();

      // Step 4: Select Remove check box
      cy.get('input[name="removefromcart"]').check(); 

      // Step 5: Remove item
      cy.get('.button-2.update-cart-button').click();
  
      // Step 5: Verify that the cart is empty
    cy.get('.order-summary-content').should('include.text', 'Your Shopping Cart is empty!');
  
    });
  });