/// <reference types="cypress" />


describe('Testes com intercept', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()

  })

  it('Intercept - Adicionar item no carrinho carrinho', () => {
    cy.get('.product-block ')//escolhendo primeiro produto
      .contains('Augusta Pullover Jacket').click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.plus').click()
    cy.get('.plus').click()
    cy.get('.plus').click()
    cy.get('.single_add_to_cart_button').click()

    cy.intercept('POST', 'http://lojaebac.ebaconline.art.br/wp-admin/admin-ajax.php', {
      statusCode: 200,
      body: { mensagem: 'Interceptado com sucesso!' }
    }).as('solicitacaoInterceptada')
    cy.get('.single_add_to_cart_button').click()
    cy.wait('@solicitacaoInterceptada').its('response.statusCode').should('eq', 200)
    cy.wait('@solicitacaoInterceptada').its('response.body.mensagem').should('eq', "Interceptado com sucesso!")

  })


  it('Intercept - Remover item do', () => {
    cy.get('.product-block ')//escolhendo primeiro produto
      .contains('Augusta Pullover Jacket').click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.plus').click()
    cy.get('.plus').click()
    cy.get('.plus').click()
    cy.get('.single_add_to_cart_button').click()

    cy.contains('Augusta Pullover Jacket” foi adicionado no seu carrinho.').should('be.visible')

    cy.get('.woocommerce-message > .button').click()



    cy.intercept('POST', 'http://lojaebac.ebaconline.art.br/wp-admin/admin-ajax.php', {
      statusCode: 200,
      body: { mensagem: 'Interceptado com sucesso!' }
    }).as('solicitacaoInterceptada')
    cy.get('.remove > .fa').click()
    

    cy.contains('Augusta Pullover Jacket” removido. Desfazer?').should('be.visible')


  })

  it('Intercept - Aumentar quantidade', () => {
    cy.comprarProduto()
    cy.get('.sub-title').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()

    cy.intercept('POST', 'http://lojaebac.ebaconline.art.br/carrinho/', {
      statusCode: 200,
      body: { mensagem: 'Interceptado com sucesso!' }
    }).as('solicitacaoInterceptada')

    cy.get('.plus').click()
    cy.wait('@solicitacaoInterceptada').its('response.statusCode').should('eq', 200)



  })






});






