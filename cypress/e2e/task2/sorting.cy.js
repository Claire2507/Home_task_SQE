describe('Items Sorting Verification', () => {
    it('allows sorting items by Name: A to Z', () => {
      // Step 1: Navigate to the page
      cy.visit('/apparel-shoes');
  
      // Step 2: Select sorting option "Name: A to Z"
      cy.get('#products-orderby').select('Name: A to Z');

      // Step 3: Verify the sorting by checking the URL
      cy.url().should('include', 'orderby=5');
  
    });
  
    it('allows sorting items by Price: Low to High', () => {
      // Navigate to the page
      cy.visit('/apparel-shoes');
  
      // Select sorting option "Price: Low to High"
      cy.get('#products-orderby').select('Price: Low to High');
  
      // Verify the sorting by checking the URL
      cy.url().should('include', 'orderby=10');
  
    });
  });