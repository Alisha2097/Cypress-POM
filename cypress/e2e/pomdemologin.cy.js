import {LoginPage} from "./pages/login_page"

const loginPage = new LoginPage()

it('POM LOGIN',{scrollBehavior:false},()=>{
    cy. on('uncaught:exception', (err, runnable) => { return false; });

    cy.visit('https://realsolutions.com.np/expert/register/')

    cy.contains('Log In').click()

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()

    // cy.get('#id_username').type('hellonepal@gmail.com')
    // cy.get('#id_password').type('Hello@2023')
    // cy.get('.btn').click()

})