// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
///<reference types='cypress'/>
import 'cypress-wait-until';
import Login from './PageObjects/login';
const lg = new Login();

//
/// <reference types="Cypress" />

// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
let data;
before(() => {
  cy.fixture("example").then(function (fdata) {
    data = fdata;
  });
})

Cypress.Commands.add("Login_Test", () => {
  cy.visit("https://customer-portal-qa.aws.sunwebportal.com/auth/login")
  cy.waitUntil(() => cy.contains('Welcome to our Customer Portal'));
  lg.getEmail().clear()
  lg.getEmail().type(data.username)
  lg.getPassword().clear()
  lg.getPassword().type(data.password)
  lg.getRememberMe().click()
  lg.getLoginButton().click()
  cy.contains('Dashboard', { timeout: 60000 }).should('be.visible')
});

var len = 0;
Cypress.Commands.add("Get_Table_Rows_Detail", () => {
  cy.get('.sun__table tbody').then(function (rowCount) {
    len = rowCount.find('tr').length;
    cy.log(len)
    if (len >= 1) {
      cy.get('.sun__table tbody').find('tr').eq(len - 1).click()
    } else {
      cy.log('No Record Found!')
    }
  })
});

// let LOCAL_STORAGE_MEMORY = {};

// Cypress.Commands.add("saveLocalStorage", () => {
//   Object.keys(localStorage).forEach(key => {
//     LOCAL_STORAGE_MEMORY[key] = localStorage[key];
//   });
// });

// Cypress.Commands.add("restoreLocalStorage", () => {
//   Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
//     localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
//   });
// });

// let cachedLocalStorageAuth;

// Cypress.Commands.add("restoreLocalStorageAuth", () => {
//   if (cachedLocalStorageAuth) {
//     localStorage.setItem('auth-token', cachedLocalStorageAuth);
//   }
// });

// Cypress.Commands.add("cacheLocalStorageAuth", () => {
//   cachedLocalStorageAuth = localStorage.getItem('auth-token');
// });

// Cypress.on('window:before:load', restoreLocalStorageAuth);

// beforeEach(restoreLocalStorageAuth);
// afterEach(cacheLocalStorageAuth);

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-wait-until'; 