describe('Language switch verification', () => {
    it('should reflect the language change in the URL and html lang attribute', () => {
      // This ensures that the test doesn't fail due to unrelated JavaScript errors in the website
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
  
      cy.visit('https://www.epam.com/');
      cy.viewport(1440, 800);
      // Click on the language selector button
      cy.get('.location-selector__button > .location-selector__button-language > .location-selector__button-language-prefix').click();
      // Select a ukr language from the dropdown menu 
      cy.get(':nth-child(6) > .location-selector__link').click();
  
       // Verify that the html tag has the correct 'lang' attribute
      cy.origin('https://careers.epam.ua/', () => {
        cy.get('html').should('have.attr', 'lang', 'uk-UA') 
      });
      
    });
  });