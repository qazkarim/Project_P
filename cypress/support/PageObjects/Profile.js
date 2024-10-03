class Profile {

    getProfileLink() {
        return cy.contains("Profile", { timeout: 60000 }).eq(0)
    }
    getCurrentPassword() {
        return cy.get('#currentPassword')
    }

    getNewPassword() {
        return cy.get('#newPassword')
    }

    getNewPasswordConfirm() {
        return cy.get('#newPasswordConfirm')
    }
    getChangePasswordButton() {

        return cy.contains('Change Password')
    }

    getChangeEmail() {
        return cy.contains('Change Email')
    }

    getNewEmailAddress() {
        return cy.get('#username')
    }

    getConfirmEmail() {
        return cy.get('#usernameConfirm')
    }

    getSubmitButton() {
        return cy.get('.button-primary', { timeout: 60000 }).contains('Submit')
    }

    getCancelButton() {
        return cy.contains('Cancel')
    }

    getChangePhoneButton() {
        return cy.contains('Change Phone')
    }
    getMobilePhone() {
        return cy.get('#phoneNumber').eq(0)
    }

    getCancelButtonPrimary() {
        return cy.get('.button-primary').eq(2)
    }

    getCancelButtonSecondary() {
        return cy.get('.button-primary').eq(2)
    }
    getMobilePhoneSecondary() {
        return cy.get('#phoneNumber').eq(1)
    }

    getConfirmPassword() {
        return cy.get('#passwordConfirm')
    }

    getPossitiveMessage() {
        return cy.get('.toast-positive')
    }

    getUserDropdown() {
        return cy.get('.summary-content')
    }

    getLogOut() {
        return cy.contains('Sign Off')
    }

    getFirstName() {
        return cy.get('#firstName')
    }

    getLastName() {
        return cy.get('#lastName')
    }

    getSSN() {
        return cy.get('#ssn')
    }

    getDateOfBirth() {
        return cy.get('#dateOfBirth')
    }

    getForGotUserName() {
        return cy.contains('Forgot Username')
    }

}
export default Profile