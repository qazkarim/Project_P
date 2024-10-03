class Login {

    getEmail() {
        return cy.get("#username")
    }
    getPassword() {
        return cy.get("#password")
    }
    getRememberMe() {
        return cy.get("#rememberMe")
    }
    getLoginButton() {
        return cy.get(".submit-button")
    }
    getGoogleButton() {
        return cy.get(".social-google-button")
    }
    getFacebookButton() {
        return cy.get(".social-fb-button")
    }
    getShowPassword() {
        return cy.get(".password-toggle")
    }
    getNeedHelp() {
        return cy.get("#need-help-link")
    }
    getCreateAccount() {
        return cy.contains("Create account")
    }

    getOnlineSupport() {
        return cy.get(".sc-1k07fow-1")
    }
    getConfirmCode() {
        return cy.get('#confirmCode', { timeout: 60000 })
    }
    getErrorMessage() {
        return cy.get('.toast-negative')
    }
    getForgotPasswordButton() {
        return cy.contains('Forgot Password')
    }
    password() {
        return cy.get('#passwordConfirm')
    }
}




export default Login