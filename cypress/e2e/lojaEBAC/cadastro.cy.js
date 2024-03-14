/// para o fluxo de criação de conta, que utilize Page Objects.
/// <reference types="cypress" />

const { minha_conta } = require('../../support/pages/minha_conta.page')

describe('Criaca de conta com - Page Objects', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/')
         
      })



    
    it('Deve se cadastrar no site', () => {
        cy.Cadastro()
    
    });

    it('Deve confirmar o cadastro', () => {
        cy.Cadastro()
        minha_conta.ola.should("be.visible")

        
    });






});




