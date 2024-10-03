class Requests {

    getRequestLink() {
        return cy.contains("Requests", { timeout: 60000 })
    }
    getServiceRequest() {
        return cy.get('.flex__request_item').contains('service request', { timeout: 60000 })
    }

    getLeaseRenewal() {
        return cy.get('.flex__request_item').contains('lease renewal')
    }

    getSunReferral() {
        return cy.get('.flex__request_item').contains('sun referral')
    }

    getGeneralInquiry() {
        return cy.get('.flex__request_item').contains('general inquiry')
    }

    getSubmitServiceRequestButton() {
        return cy.contains('Submit Service Request', { timeout: 60000 })
    }

    getAlert() {
        return cy.get("[role='alert']")
    }

    getPropertyName() {
        return cy.get('.form-fieldset')
    }

    getSiteAddress() {
        return cy.get('.form-fieldset')
    }

    getServiceRequestType() {
        return cy.get('#serviceRequestType')
    }

    getPriority() {
        return cy.get('#priority')
    }

    getRequestType() {
        return cy.get('#requestType')
    }

    getSubject() {
        return cy.get('#subject')
    }

    getDescription() {
        return cy.get('#description')
    }

    getAccessEntyNotes() {
        return cy.get('#accessEntryNotes')
    }

    getSpecialInstruction() {
        return cy.get('#specialInstructionsForAccess')
    }

    getBackButton() {
        return cy.contains('Back')
    }
    getTable() {
        return cy.get('.sun__table tbody')
    }

    getStatusInDetails() {
        return cy.get('.service-request-details .badge-yellow')
    }

    // General Inquiry Objects
    getContactMethod() {
        return cy.get('#contactMethod', { timeout: 60000 })
    }

    getContactTime() {
        return cy.get('#contactTime')
    }

    getTopic() {
        return cy.get('#topic')
    }

    getRequestDetails() {
        return cy.get('#requestDetails')
    }

}
export default Requests