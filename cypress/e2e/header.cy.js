describe("Header", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("links to the correct pages", () => {
    cy.get('.global-navigation--inner > .site--logo > a > .sp-haus__dark').click()
    cy.location("pathname").should("eq","/")

    cy.get('.sp-phone').click()
    cy.location("pathname").should("eq","/pages/find-haus")

    cy.get('.icon').click()
    cy.location("pathname").should("eq","/account/login")
  })

  it("the search bar returns the correct search results", () => {
    cy.get(".search--trigger > .sp").click()
    cy.get("#SearchInput").type("Forum Armchair{enter}")

   cy.get(".search-result--item").eq(0).within(() => {
    cy.get(".search-result--link").should("contain", "Forum Armchair")
    cy.get(".price").should("contain", "£1,445.00")
   })
  })

  it.only("searches for a product and selects the first result", () => {
    cy.visit('/');
  
    cy.searchAndSelectProduct('table');
  
    cy.location("pathname").should("include","table")
  });
  
})
