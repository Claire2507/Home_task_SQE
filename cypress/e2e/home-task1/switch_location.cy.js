describe('Location List Switch by Region Verification', () => {
    it('should allow to switch location list by region', () => {
      // Шаг 1: Открытие EPAM.com
      cy.visit('https://www.epam.com/');
      cy.get(':nth-child(16) > .section-ui > .section__wrapper > .text > .text-ui-23 > .scaling-of-text-wrapper > .font-size-80-33 > .museo-sans-light').scrollIntoView();
      
      const regions = [
        { button: 'AMERICAS', uniqueLocation: 'United States' },
        { button: 'EMEA', uniqueLocation: 'Armenia' },
        { button: 'APAC', uniqueLocation: 'India' },
      ];
  
      regions.forEach((region) => {
        cy.get('.tabs-23__link.js-tabs-link').contains(region.button).click();
        // Здесь добавляем проверку, что после клика отображается уникальный элемент локации для этого региона
        cy.get('.locations-viewer-23__country-title.list').contains(region.uniqueLocation).should('exist');
      });
    });
  });
  
    
      //cy.get(':nth-child(16) > .section-ui > .section__wrapper > .text > .text-ui-23 > .scaling-of-text-wrapper > .font-size-80-33 > .museo-sans-light').scrollIntoView(); 
  
      //cy.get('.tabs-23__title.active > .tabs-23__link').should('be.visible').click();

      //cy.get(':nth-child(2) > .tabs-23__link').should('be.visible');
      //cy.get(':nth-child(3) > .tabs-23__link').should('be.visible');
      // Шаг 3: Проверка, что 3 региона представлены: AMERICAS, EMEA, APAC
      //cy.get('селектор_для_кнопки_AMERICAS').should('be.visible').click(); // Проверяем и переключаемся на AMERICAS
      //cy.get('селектор_для_списка_AMERICAS').should('be.visible'); // Проверяем список локаций AMERICAS
  
      //cy.get('селектор_для_кнопки_EMEA').should('be.visible').click(); // Переключаемся на EMEA
      //cy.get('селектор_для_списка_EMEA').should('be.visible'); // Проверяем список локаций EMEA
  
     //cy.get('селектор_для_кнопки_APAC').should('be.visible').click(); // Переключаемся на APAC
      //cy.get('селектор_для_списка_APAC').should('be.visible'); // Проверяем список локаций APAC
    //});
 // });