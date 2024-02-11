// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { faker } from "@faker-js/faker";
Cypress.Commands.add('Cadastro', (email, senha) => {

    const dados = require("../fixtures/dados.json");// importando arquivo de dados

    cy.get('#reg_email').type(faker.internet.email())//sempre passar o teste sem ter email ja cadastrado
    cy.get('#reg_password').type(dados.senha)//mantive a senha um padrao no fixture
    cy.get(':nth-child(4) > .button').click()




})

Cypress.Commands.add('comprarProduto', () => {
    cy.get('.product-block ')//escolhendo primeiro produto
        .contains('Produto de Teste').click()
    cy.get('.single_add_to_cart_button').click()//escolhendo primeiro produto
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()

})

Cypress.Commands.add('comprar', () => {
    const fd = new FormData()

    fd.append('billing_first_name', 'Bruno')
    fd.append('billing_last_name', 'Gomes')
    fd.append('billing_company: ', '')
    fd.append('billing_country', 'BR')
    fd.append('billing_address_1', 'rua fulano')
    fd.append('billing_address_2', '')
    fd.append('billing_city', 'rio de janeiro')
    fd.append('billing_state', 'RJ')
    fd.append('billing_postcode', '20231992')
    fd.append('billing_phone', '219586842')
    fd.append('payment_method', 'bacs')
    fd.append('terms', 'on')
    fd.append('terms-field', 1)
    fd.append('woocommerce-process-checkout-nonce', ' 40e90299c9')
    fd.append('_wp_http_referer', `/?wc-ajax=update_order_review`)

    cy.request({
        url: `/?wc-ajax=checkout`,
        method: "POST",
        body: fd
    })

    Cypress.Commands.add('comandoUnico', () => {
        //Cadastro
        const dados = require("../fixtures/dados.json");// importando arquivo de dados

        cy.get('#reg_email').type(faker.internet.email())//sempre passar o teste sem ter email ja cadastrado
        cy.get('#reg_password').type(dados.senha)//mantive a senha um padrao no fixture
        cy.get(':nth-child(4) > .button').click()
        //Cadastro


        cy.get('.logo-in-theme > .logo > a > .logo-img').click()

        //comprarProduto
        cy.get('.product-block ')//escolhendo primeiro produto
            .contains('Produto de Teste').click()
        cy.get('.single_add_to_cart_button').click()//escolhendo primeiro produto
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        //comprarProduto

        //comprar
        const fd = new FormData()

        fd.append('billing_first_name', 'Bruno')
        fd.append('billing_last_name', 'Gomes')
        fd.append('billing_company: ', '')
        fd.append('billing_country', 'BR')
        fd.append('billing_address_1', 'rua fulano')
        fd.append('billing_address_2', '')
        fd.append('billing_city', 'rio de janeiro')
        fd.append('billing_state', 'RJ')
        fd.append('billing_postcode', '20231992')
        fd.append('billing_phone', '219586842')
        fd.append('payment_method', 'bacs')
        fd.append('terms', 'on')
        fd.append('terms-field', 1)
        fd.append('woocommerce-process-checkout-nonce', ' 40e90299c9')
        fd.append('_wp_http_referer', `/?wc-ajax=update_order_review`)

        cy.request({
            url: `/?wc-ajax=checkout`,
            method: "POST",
            body: fd
        })





    })






})


