describe("Home Page", () => {
  it("displays all 12 products on the home page", () => {
    cy.visit("/")
    cy.get("#ItemGrid > .product-li").should("have.length", 12)
    cy.get("#ItemGrid > .product-li").eq(0).within(() => {
      cy.get("div > span").should("contain", "New")
      cy.get(".link--product").should("contain", "Forum Armchair")
      cy.get(".link--product").should("contain", "£1,445.00")
    })

    cy.get("#ItemGrid > .product-li").eq(1).within(() => {
      cy.get(".link--product").should("contain", "Ferm Living")
      cy.get(".link--product").should("contain", "£95.00")
    })

    cy.get("#ItemGrid > .product-li").eq(2).within(() => {
      cy.get(".link--product").should("contain", "Stelton Hurricane Lamp")
      cy.get(".link--product").should("contain", "£49.00")
    })
  })

  it("the 'Accept Cookies' popup displays on the bottom of the page.", () => {
    cy.visit("/")
    cy.get('.cc-bottom').should('exist')
  
    // Check if the '.cc-bottom' element is at the bottom of the page
    cy.get('.cc-bottom').should('be.visible').and(($popup) => {
      const windowBottom = Cypress.$(window).height()
      const popupBottom = $popup[0].getBoundingClientRect().bottom;
  
      expect(popupBottom).to.be.closeTo(windowBottom, 20) 
    });
  });
  
  
  
})
