describe('Search Function Verification', () => {
    it('should show the search results for "AI"', () => {
      
      cy.visit('https://www.epam.com/');
      // Click on the search icon to open the search input
      cy.get('.search-icon').click();
      // Find the search input field and type 'AI'
      cy.get('.search-results__input-holder').type('AI{enter}');
      // verify search results
      cy.get('.search-results__counter')
        .should('exist')
        .and('be.visible') 
        .and('contain.text', 'results for "AI"');
  
    });
  });