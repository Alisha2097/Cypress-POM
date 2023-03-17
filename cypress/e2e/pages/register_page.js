export class RegisterPage{
    
    //in the page class we can create variables for the object locators
    firstname_textbox='#id_first_name'
    lastname_textbox='#id_last_name'
    contactnumber_textbox='#id_contact_number'
    email_textbox='#id_email'
    password_textbox='#id_password'
    confirmpassowrd_textbox='#id_confirm_password'
    register_button='.btn'

    //these are the class variables so it uses this keyword


    enterFirstname(firstname){

        cy.get(this.firstname_textbox).type(firstname)

    }

    enterLastname(lastname){
        cy.get(this.lastname_textbox).type(lastname)

    }

    enterContactnumber(contactnumber){
        cy.get(this.contactnumber_textbox).type(contactnumber)

    }

    enterEmail(email){
        cy.get(this.email_textbox).type(email)

    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)

    }

    enterConfirmpassword(confirmpassword){
        cy.get(this.confirmpassowrd_textbox).type(confirmpassword)

    }

    clickRegister(){
        cy.get(this.register_button).click()

    }




}