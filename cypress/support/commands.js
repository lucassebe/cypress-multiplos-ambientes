import { env } from "./enviroments";
Cypress.Commands.add('loginFront', () => {
    env()
    cy.visit(Cypress.env('URL').front + "/login")
    cy.get("input[placeholder='Username']").type(Cypress.env('user').username);
    cy.get("input[placeholder='Senha']").type(Cypress.env('user').password);
    cy.get("button[type='button']").click();
})
Cypress.Commands.add('loginAPI', () => {
    env()
    cy.api({
        method: 'POST',
        url: Cypress.env('URL').back + "/auth",
        body: {
            "password": Cypress.env('user').password,
            "username": Cypress.env('user').username,
        }
    })
})