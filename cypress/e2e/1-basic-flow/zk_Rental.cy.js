
describe('Rental App Tests', () => {


    it('Verify user is able to create and submit a rental application from Portal', () => {
        cy.visit('https://customer-portal-qa.aws.sunwebportal.com/apply/demo')
        cy.get('#propertyCode').type('pnr')
        cy.get('#siteNumber').type('131')
        cy.get('#applicationType').select('Rental')
        cy.get('a[href]').click()
        cy.wait(4000)

        cy.contains('Sign In').click()
        cy.wait(2000)
        cy.get('#username').type('andrew.saimonds2024@yahoo.com')
        cy.get('#password').type('Password#123')
        cy.contains('Log in').click()
        cy.wait(6000)

        cy.get('#applicant_single').check()
        cy.get('#moveInDate').type('2024-12-01')
        cy.contains('Begin Application').click()
        cy.wait(4000)

        // Personal Info 
        cy.get('#dateOfBirth').type('2000-01-01')
        cy.get('#addressLine1').type('27777 Franklin Rd')
        cy.get('#addressLine2').type('300')
        cy.get('#city').type('Southfield')
        cy.get('#state').select('Michigan')
        cy.get('#zipcode').type('48034')
        cy.get('#country').select('United States')
        cy.get('#socialSecurityNumber').type('456-00-1234')
        cy.get('#primaryPhoneNumber').type('313-098-5678')
        cy.get('#secondaryPhoneNumber').type('480-134-0987')
        cy.get('#applicant_unmarried').check()
        cy.get('#dependentCount').type('2')
        cy.wait(2000)
        cy.get('#dependentAge').type('2,4')
        cy.contains('Next').click()

        // Identity verification
        cy.contains('Plaid Success').click()
        cy.contains('Next').click()

        // Communication Preferences
        cy.get('#personal_agree_1').check()
        cy.get('#personal_agree_2').check()
        cy.get('#personal_agree_3').check()
        cy.wait(2000)
        cy.get('button').contains('Next').click()

        // Residential History
        cy.wait(2000)
        cy.get('[class="form-checkbox ng-untouched ng-pristine ng-valid"]').check()
        cy.get('#residenceTimeYears_0').type('3')
        cy.get('#residenceTimeMonths_0').type('3')
        cy.get('#applicant_rent_0').check()
        cy.wait(2000)
        cy.get('#landlordName_0').type('Jackie Chan')
        cy.get('#landlordPhoneNumber_0').type('313-568-0887')
        cy.get('#residenceMonthlyPayment_0').type('1500')
        cy.contains('Next').click()

        // Financial/Employment History 
        cy.wait(3000)
        cy.get('#employmentType-0').select('Employed')
        cy.get('#title-0').type('DevOps')
        cy.get('#companyName-0').type('Sun')
        cy.get('#addressLine1').type('27777 Franklin Rd')
        cy.get('#addressLine2').type('200')
        cy.get('#city-0').type('Southfield')
        cy.get('#state_0').select('Michigan')
        cy.get('#zipcode-0').type('48034')
        cy.get('#phone-0').type('313-437-0987')
        cy.get('#isCurrent-0').check()
        cy.get('#start-0').type('2020-01-01')
        cy.get('#monthlyGross-0').type('5000')
        cy.contains('Next').click()

        // Finances/Recurring Expenses
        cy.wait(2000)
        cy.contains('Next').click()

        // Occupants
        cy.wait(2000)
        cy.contains('Next').click()

        // Questionairre
        cy.wait(2000)
        cy.get('#answer-no-5').check()
        cy.get('#answer-no-6').check()
        cy.get('#answer-no-hasPetsAtLocation').check()
        cy.get('#answer-no-0').check()
        cy.get('#answer-no-1').check()
        cy.get('#answer-no-2').check()
        cy.get('#answer-no-3').check()
        cy.get('#answer-no-4').check()
        cy.contains('Next').click()

        // Disclosure Agreement
        cy.wait(2000)
        cy.contains('Agree & Pay Now').click()

        // Application Fee
        cy.get('#promoCode').type('PNR-24-203')
        cy.contains('Apply').click()
        cy.wait(3000)
        cy.contains('Next').click()

        // Confirm App Fee
        // cy.wait(4000)
        // cy.get('#acceptTermsChkbx').check()
        // cy.get('#pay').click()
        // cy.wait(2000)
        // cy.contains('Next').click()

        // Review-Submit 
        cy.wait(1000)
        cy.get('#termsConditionsInitials').type('AS')
        cy.get('#termsConditionsConsent').check()
        cy.get('button').contains('Submit Application').click()


    })

})