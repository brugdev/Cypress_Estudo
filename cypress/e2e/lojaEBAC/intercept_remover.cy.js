/// <reference types="cypress" />

const { minha_conta } = require('../../support/pages/minha_conta.page')

describe('Criacao de conta com - App Actions', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/')
         
      })




    it('Remover produto', () => {
        cy.Cadastro()
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()//voltei para home
        cy.comprarProduto()
        cy.get('.sub-title').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        
        cy.intercept('GET', 'http://lojaebac.ebaconline.art.br/carrinho/?removed_item=1', {
            statusCode: 200,
            body: { mensagem: 'Interceptado com sucesso!' }
          }).as('solicitacaoInterceptada').then((response) => {
            
            
        })

    });

          
        
        

   


    
});

    


    


