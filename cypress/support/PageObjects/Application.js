class Application {

    getHeading() {
        return cy.contains("Property Code (ex: CMC, BST, PNR, NVL, WWH, REO)")
    }
   getPropertyCode(){
    return cy.get('#propertyCode')
   }
   getSiteNumber(){
    return cy.get('#siteNumber')
   }
   getApplicationType(){
    return cy.get('#applicationType')
   }

   getApplyWithCoApplicant(){
    return cy.get('#applicant_joint')
   }

   getCoApplicantFirstName(){
    return cy.get('#firstName_1')
   }

   getCoApplicantLastName(){
    return cy.get('#lastName_1')
   }

   getCoApplicantEmail(){
    return cy.get('#email_1')
   }

   getFirstPresentForApplication(){
    return cy.get('#presence_1')
   }

   getMoveInDate(){
    return cy.get('#moveInDate')
   }

   getReferralType(){
    return cy.get('#referralType')
   }

   getReferralValue(){
    return cy.get('#referralValue')
   }

   getBeginApplicationButton(){
    return cy.contains('Begin Application')
   }

}

export default Application