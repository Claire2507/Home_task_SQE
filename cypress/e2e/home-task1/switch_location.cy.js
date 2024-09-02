describe('Location List Switch by Region Verification', () => {
    it('should allow to switch location list by region', () => {
      
      cy.visit('https://www.epam.com/');
      describe('Location List Switch by Region Verification', () => {
    it('should allow to switch location list by region', () => {
      
      cy.visit('https://www.epam.com/');
      //Scroll into view the section that contains region switch options
      cy.get(':nth-child(16) > .section-ui > .section__wrapper > .text > .text-ui-23 > .scaling-of-text-wrapper > .font-size-80-33 > .museo-sans-light').scrollIntoView();
      
      
      const regions = [
        { button: 'AMERICAS', uniqueLocation: 'United States' },
        { button: 'EMEA', uniqueLocation: 'Armenia' },
        { button: 'APAC', uniqueLocation: 'India' },
      ];
  
      regions.forEach((region) => {
        cy.get('.tabs-23__link.js-tabs-link').contains(region.button).click();
       
        cy.get('.locations-viewer-23__country-title.list').contains(region.uniqueLocation).should('exist');
      });
    });
  });
      cy.get(':nth-child(16) > .section-ui > .section__wrapper > .text > .text-ui-23 > .scaling-of-text-wrapper > .font-size-80-33 > .museo-sans-light').scrollIntoView();
      
      const regions = [
        { button: 'AMERICAS', uniqueLocation: 'United States' },
        { button: 'EMEA', uniqueLocation: 'Armenia' },
        { button: 'APAC', uniqueLocation: 'India' },
      ];
  
      regions.forEach((region) => {
        cy.get('.tabs-23__link.js-tabs-link').contains(region.button).click();
       
        cy.get('.locations-viewer-23__country-title.list').contains(region.uniqueLocation).should('exist');
      });
    });
  });
  
    
  