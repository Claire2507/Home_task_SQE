describe('Add Item to Cart Verification', () => {
    it('allows adding an item to the cart and verifies it', () => {
      // Step 1: Open the specified page
      cy.visit('/computing-and-internet');
  
      // Step 2: Click on "ADD TO CART"
      cy.get(' #add-to-cart-button-13').first().click();
  
      // Step 3: Click on "Shopping cart" link in the header
      cy.get('span.cart-label').contains('Shopping cart').click();
  
      // First Verification: Check that the item "Computing and Internet" is present in the cart
      cy.get('.product-name').contains('Computing and Internet').should('exist');
  
      // Second Verification: Check that the quantity of "Computing and Internet" is exactly 1
      cy.get('.qty-input').should('have.value', '1');
    });
  });