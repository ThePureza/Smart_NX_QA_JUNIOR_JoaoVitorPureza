/// <reference types="cypress" />

it ('1. Login com sucesso', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.orangehrm-login-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
})

it ('2. Login sem fornecer usuário e senha', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.orangehrm-login-button').click()
    cy.get(':nth-child(2) > .oxd-input-group').find('.oxd-text').should('have.text', 'Required')
    cy.get(':nth-child(3) > .oxd-input-group').find('.oxd-text').should('have.text', 'Required')
})

it ('3. Login com credenciais inválidas', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('error')
    cy.get('[name="password"]').type('error')
    cy.get('.orangehrm-login-button').click()
    cy.get('.oxd-alert').should('have.text', 'Invalid credentials')
})