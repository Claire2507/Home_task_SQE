describe('Policies List Verification', () => {
    it('should include all required policy items', () => {
      
      cy.visit('https://www.epam.com/');
      cy.scrollTo('bottom');

      cy.get('.policies >.heading.large-preheader').should('exist');
      cy.get('.policies >.heading.large-preheader').should('be.visible').and('contain.text', 'policies');
    
      cy.get('.policies-left .fat-links').contains('INVESTORS').should('have.attr', 'href', '/investors');
      cy.get('.policies-left .fat-links').contains('OPEN SOURCE').should('have.attr', 'href', '/services/engineering/open-source');
      cy.get('.policies-left .fat-links').contains('PRIVACY POLICY').should('have.attr', 'href', 'https://privacy.epam.com/core/interaction/showpolicy?type=CommonPrivacyPolicy');
      cy.get('.policies-left .fat-links').contains('COOKIE POLICY').should('have.attr', 'href', '/cookie-policy');

    
      cy.get('.policies-right .fat-links').contains('APPLICANT PRIVACY NOTICE').should('have.attr', 'href', '/applicant-privacy-notice');
      cy.get('.policies-right .fat-links').contains('WEB ACCESSIBILITY').should('have.attr', 'href', '/web-accessibility-statement');
    
    });
});