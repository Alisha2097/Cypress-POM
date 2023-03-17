export class LoginPage{

    enterUsername(){
        cy.get('#id_username').type('hellonepal@gmail.com')

    }

    enterPassword(){
        cy.get('#id_password').type('Hello@2023')

    }

    clickLogin(){
        cy.get('.btn').click()

    }



}