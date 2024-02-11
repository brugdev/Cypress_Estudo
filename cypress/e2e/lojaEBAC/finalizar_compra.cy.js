/// <reference types="cypress" />

const { minha_conta } = require('../../support/pages/minha_conta.page')

describe('Criacao de conta com - App Actions', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/')
         
      })



    
    it('Deve efetuar a compra - App Actions', () => {
        cy.Cadastro()
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()//voltei para home
        cy.comprarProduto()
        cy.comprar()

    
    });

    it('Deve comprar com comando unico', () => {
        cy.comandoUnico()
        
    });

    


});
