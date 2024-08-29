describe('Language switch verification', () => {
    it('should reflect the language change in the URL and html lang attribute', () => {
      // Игнорируем необработанные исключения
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
  
      cy.visit('https://www.epam.com/');
      cy.viewport(1440, 800);
  
      cy.get('.location-selector__button > .location-selector__button-language > .location-selector__button-language-prefix').click();
      cy.get(':nth-child(6) > .location-selector__link').click();
  
      
      cy.origin('https://careers.epam.ua/', () => {
        cy.get('html').should('have.attr', 'lang', 'uk-UK') 
      });
      
    });
  });