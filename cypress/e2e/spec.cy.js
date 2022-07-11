describe("My First Test", () => {
  it("Visits Birdie", () => {
    cy.visit("http://localhost:3000/auth")

    cy.contains("Sign Up").click()

    cy.contains("Login").click()

    cy.url().should("include", "/auth")

    cy.get(".loginForm--formUsername").should("have.value", "")
    cy.get(".loginForm--formUsername").type("ana").should("have.value", "ana")

    cy.get(".loginForm--formPassword").should("have.value", "")
    cy.get(".loginForm--formPassword").type("pass").should("have.value", "pass")
  })
})
