import {RegisterPage} from "./pages/register_page"

const registerPage = new RegisterPage()

it('POM DEMO',{scrollBehavior:false},()=>{
    cy. on('uncaught:exception', (err, runnable) => { return false; });

    cy.visit('https://realsolutions.com.np/expert/register/')

    registerPage.enterFirstname('Ram')
    registerPage.enterLastname('Shrestha')
    registerPage.enterContactnumber('9123456789')
    registerPage.enterEmail('hellonepal@gmail.com')
    registerPage.enterPassword('Hello@2023')
    registerPage.enterConfirmpassword('Hello@2023')
    registerPage.clickRegister()
    
    

    // cy.get('#id_first_name').type('Ram')
    // cy.get('#id_last_name').type('Shrestha')
    // cy.get('#id_contact_number').type('9123456789')
    // cy.get('#id_email').type('hellonepal@gmail.com')
    // cy.get('#id_password').type('Hello@2023')
    // cy.get('#id_confirm_password').type('Hello@2023')
    // cy.get('.btn').click()

})