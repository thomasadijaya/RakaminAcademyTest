import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps";

Given("User are in the login page", function(){
    cy.visit('https://web-staging.rakamin.com/login')
})

When("User enter the valid credential", function(){
    cy.get('[data-cy="login-email-text-field"]').type('kutukucing16@gmail.com')
    cy.get('[data-cy="login-password-text-field"]').type('kutukucing123')
    cy.get('[data-cy="login-submit-button"]').click()
})

Then("User are successfully login", function(){
    cy.get('[data-cy="dashboard-header-title"]').should('have.text','Courses')
})