describe('Search Function Verification', () => {
    it('should show the search results for "AI"', () => {
      
      cy.visit('https://www.epam.com/');
  
      cy.get('.search-icon').click();
  
      cy.get('.search-results__input-holder').type('AI{enter}');
      //cy.get('.search-results__submit-text.button-text').click();
      cy.get('.search-results__counter')
        .should('exist')
        .and('be.visible') // Проверяем, что элемент видим
        .and('contain.text', 'results for "AI"');
  
    });
  });