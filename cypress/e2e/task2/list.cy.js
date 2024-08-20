describe('Sub-groups Verification in Computers Group', () => {
    it('Verifies that "Computers" group has 3 sub-groups with correct names', () => {
      // Navigate to the homepage
      cy.visit('/');
  
      // Click on the "Computers" link in the top menu
      cy.get('.top-menu > li > a[href="/computers"]').click();
  
      // Verify the presence and text of subgroups within the "Computers" group
      cy.get('.top-menu > li:nth-child(2) .sublist.firstLevel').within(() => {
        // Check that the "Desktops" subgroup exists and contains the correct text
        cy.get('a[href="/desktops"]').should('contain', 'Desktops');
        // Check that the "Notebooks" subgroup exists and contains the correct text
        cy.get('a[href="/notebooks"]').should('contain', 'Notebooks');
        // Check that the "Accessories" subgroup exists and contains the correct text
        cy.get('a[href="/accessories"]').should('contain', 'Accessories');
      });
  
      // Verify the total number of subgroups under "Computers" is exactly 3
      cy.get('.top-menu > li:nth-child(2) .sublist.firstLevel > li').should('have.length', 3);
      //verify items are visible
      cy.get('.sub-category-item .title > a[href="/desktops"]').should('be.visible');
      cy.get('.sub-category-item .title > a[href="/notebooks"]').should('be.visible');
      cy.get('.sub-category-item .title > a[href="/accessories"]').should('be.visible');
    });
  });