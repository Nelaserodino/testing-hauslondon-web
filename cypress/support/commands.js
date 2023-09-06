// Custom command to add a product to the cart
Cypress.Commands.add('addToCart', () => {
    cy.get('#AddToCart').click();
  });

Cypress.Commands.add('changeCurrency', (currency) => {
    cy.get('.icn-coin').click();
    cy.get(`.sp-coin-${currency.toLowerCase()}`).click();
});

Cypress.Commands.add('searchAndSelectProduct', (productName) => {
    cy.get(".search--trigger > .sp").click()
    cy.get('#SearchInput').type(productName)
  
    cy.get('.search-results').should('be.visible')
    
    cy.get('.search-result--item').eq(0).should('be.visible')
    cy.get('.search-result--item').eq(0).as('firstResult')
    cy.get('@firstResult').click()
});
  