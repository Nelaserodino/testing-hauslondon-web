describe("Shopping Cart", () => {
  it("users can add 1 product to the cart", () => {
    cy.visit("/")
    cy.get("#ItemGrid > .product-li").eq(0).click()
    cy.get('#AddToCart').click()
    cy.get('.nt-cartcount > .nt-itemcount').contains("1")
  })

  it("users can add 2 products to the cart", () => {
    cy.visit("/")
    cy.get("#ItemGrid > .product-li").eq(0).click()
    cy.get('#AddToCart').click()

    cy.wait(1000).then(() => {
      cy.get('.global-navigation--inner > .site--logo > a > .sp-haus__dark').click()
      cy.get("#ItemGrid > .product-li").eq(1).click()
      cy.get('#AddToCart').click()
    })
    cy.get('.nt-cartcount > .nt-itemcount').contains("2")
  })

  it("images have the correct alt tags", () => {
    cy.visit("/")
    cy.get("#ItemGrid > .product-li").eq(0).click()
    cy.get(".product-image > img").should("have.attr", "alt").and("not.be.empty"); 
  })

  it("the currency updates correctly from euros to dollars", () => {
    cy.visit("/")
    cy.get("#ItemGrid > .product-li").eq(0).click()
    cy.addToCart();
    cy.changeCurrency("USD");
    cy.visit("/cart")
    cy.get('.cart-subtotal--price').should("contain", "$")
  })

  it("the currency updated correctly from euros to punds", () => {
    cy.visit("/")
    cy.get("#ItemGrid > .product-li").eq(0).click()
    cy.addToCart();
    cy.changeCurrency("GBP");
    cy.visit("/cart")
    cy.get('.cart-subtotal--price').should("contain", "£")
  })
})
