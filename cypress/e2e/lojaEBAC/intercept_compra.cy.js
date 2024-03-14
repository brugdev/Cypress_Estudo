/// <reference types="cypress" />

const { minha_conta } = require('../../support/pages/minha_conta.page')

describe('Criacao de conta com - App Actions', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/')
         
      })



    
    it('Deve efetuar a compra - Intercept', () => {
        cy.Cadastro()
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()//voltei para home
        cy.get('.product-block ')//escolhendo primeiro produto
        .contains('Augusta Pullover Jacket').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()

        cy.intercept('POST', 'http://lojaebac.ebaconline.art.br/wp-admin/admin-ajax.php', {
            statusCode: 200,
            body: { mensagem: 'Interceptado com sucesso!' }
          }).as('solicitacaoInterceptada').then((response) => {
                //expect(response.body).to.have.property(mensagem)
                expect(response.body).to.equal(`'mensagem: 'Interceptado com sucesso!'`)
                //expect(response.status).to.equal(200)
                
        })
          




          
        
        

   


    
    });

    


    


});
