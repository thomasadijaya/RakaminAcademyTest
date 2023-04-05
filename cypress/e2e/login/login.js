import {Given,When,And,But,Then} from "cypress-cucumber-preprocessor/steps";

Given("User are in the login page", function(){
    cy.visit('https://web-staging.rakamin.com/login')
})

When("User enter the valid email {string} and password {string}", function(email,password){
    cy.get('[data-cy="login-email-text-field"]').type(email)
    cy.get('[data-cy="login-password-text-field"]').type(password)
    cy.get('[data-cy="login-submit-button"]').click()
})

When("User enter the valid email {string}", function(email){
    cy.get('[data-cy="login-email-text-field"]').type(email)
})

But("User enter the invalid password {string}", function(password){
    cy.get('[data-cy="login-password-text-field"]').type(password)
    cy.get('[data-cy="login-submit-button"]').click()
})

Then("User are successfully login", function(){
    cy.get('[data-cy="dashboard-header-title"]').should('have.text','Courses')
})

Then("User are failed to login", function(){
    cy.get('.sc-ilEZps').should('have.text','Kata sandi anda salah')
})