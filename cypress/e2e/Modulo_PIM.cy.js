/// <reference types="cypress" />

it ('1. Pesquisar o módulo “PIM”', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.orangehrm-login-button').click()
    cy.get('.oxd-input').type('PIM')
    cy.get('ul.oxd-main-menu').find('li').should('have.length', 1).should('have.text', 'PIM')
})

it ('2. Pesquisar um módulo diferente de “PIM”', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.orangehrm-login-button').click()
    cy.get('.oxd-input').type('Admin')
    cy.get('ul.oxd-main-menu').find('li').should('have.length', 1).should('not.have.text', 'PIM')
})

it ('3. Apagar a pesquisa', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.orangehrm-login-button').click()
    cy.get('.oxd-input').type('PIM')
    cy.get('ul.oxd-main-menu').find('li').should('have.length', 1).should('have.text', 'PIM')
    cy.get('.oxd-input').clear()
    cy.get('ul.oxd-main-menu').find('li').should('have.length.at.least', 2)
})

it ('4. Acessar o módulo “PIM”', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.orangehrm-login-button').click()
    cy.get('.oxd-input').type('PIM')
    cy.get('ul.oxd-main-menu').find('li').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'PIM')
})