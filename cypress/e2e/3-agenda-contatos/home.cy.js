/// <reference types="cypress"/>

describe('Testes na Home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Testando inserção de novos contatos', () => {
        cy.get('.sc-iAEyYk').then((contatos) => {
            let contador = parseInt(contatos.length)

            cy.get('[type="text"]').type('Ana')
            cy.get('[type="email"]').type('ana@testes.com')
            cy.get('[type="tel"]').type('(11) 111111111{enter}')
        
            cy.get('.sc-iAEyYk').should('have.length', contador)

        })
        cy.screenshot('Contato Adicionado')
    })

    it('Testando a fução de alteração de um contato',() => {


        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()

        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Gabriel')


        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('gabriel@testesDeEdicao.com')


        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('(11) 111111111')

        cy.get('.alterar').click()

        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').contains('gabriel@testesDeEdicao.com')

        cy.screenshot('Contato Editado')
        
    })

    it('Testando a função de remoção de contatos', () => {
        cy.get('.sc-iAEyYk').then((contatos) => {
            let contador = parseInt(contatos.length)

            cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()

            cy.get('.sc-iAEyYk').should('have.length', contador)

            cy.screenshot('Contato Excluido')
        })

        
    })
})

