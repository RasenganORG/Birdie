describe("My First Test", () => {
  it("Visits Birdie", () => {
    cy.visit("http://localhost:3000/auth")

    cy.contains("Sign Up").click()

    cy.contains("Login").click()

    cy.url().should("include", "/auth")

    // adding values to the form so we can submit it
    cy.get(".loginForm--formUsername").should("have.value", "")
    cy.get(".loginForm--formUsername").type("ana").should("have.value", "ana")

    cy.get(".loginForm--formPassword").should("have.value", "")
    cy.get(".loginForm--formPassword").type("pass")
    // submitting the form
    cy.get(".loginForm--formButton").click()

    // checking user is redirected to the homepage
    cy.url().should("include", "/")

    // checking if user can type in the textarea on the main page
    cy.get("[data-cy='addtweet--textarea']").type("I can type here too")

    // checking if user can click on the comment button and if modal is opened
    cy.get("span[data-cy='tweetpost--comment']").click()
    cy.get("div.ant-modal-content").should("be.visible").contains("Reply")

    // checking is user can type in the text area
    cy.get("[data-cy='commentmodal--textarea']").type(
      "Hey look I can type here"
    )

    // closing the modal
    cy.get(".ant-modal-close-x").click()

    // clicking on the comment to be redirectioned to the /comment page
    cy.get("[data-cy='tweetpost--p']").click()

    // checking if current url is /comment
    cy.url().should("include", "/comment")

    // checking if user can type in the text area on the comment page
    cy.get("[data-cy='tweetpost--textarea']").type("I can type here too")

    // checking if user can click on the back button on the comment page
    cy.get("div.ant-page-header-back-button").click()

    // checking if current url is /
    cy.url().should("include", "/")
  })
})
