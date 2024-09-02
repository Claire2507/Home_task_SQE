describe('Change number of items on page', () => {
    it('allows changing the number of displayed items', () => {
      // Step 1: Navigate to the specified page
      cy.visit('/apparel-shoes');
  
      // Step 2: Change the number of items to display per page to 4
      cy.get('#products-pagesize').select('4');
  
      //cy.wait(1000); 
      // Step 3: Verify that 4 items are now displayed on the page
      cy.get('.product-grid .item-box').should('have.length', 4);
  
      // Repeat steps to change the number of displayed items to 8 and 12 and verify
      cy.get('#products-pagesize').select('8');
      //cy.wait(1000); 
      cy.get('.product-grid .item-box').should('have.length', 8);
  
      cy.get('#products-pagesize').select('12');
      //cy.wait(1000); 
      cy.get('.product-grid .item-box').should('have.length', 12);
    });
  });
  