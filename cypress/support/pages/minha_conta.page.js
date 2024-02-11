/// <reference types="cypress" />
export const minha_conta = {
   get ola() {return cy.get('.woocommerce-MyAccount-content > :nth-child(2)')}
}