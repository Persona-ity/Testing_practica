describe('Обновление организации', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('auth').then(data => {
            cy.get('.form-input--text').type(data.employerLogin);
            cy.get('.form-input--password').type(data.employerPassword);
            cy.get(':nth-child(3) > .button').click();
        });
        cy.get(':nth-child(4) > .menu-item__item-name').click();
    });

    it('Обновление', () => {
        cy.fixture('updateOrganization').then(data => {
            cy.get('.about-org > :nth-child(1) > .form-control--max > .form-input--text').clear().type(data.invalidName);
            cy.get('.form-area').clear().type(data.invalidDescription);
            cy.get(':nth-child(3) > :nth-child(1) > .form-control--max > .form-input--text').clear().type(data.invalidFace);
            cy.get(':nth-child(3) > :nth-child(2) > .form-control--max > .form-input--text').clear().type(data.invalidStreet);
            cy.get('.contacts__fields > :nth-child(1) > .form-control--max > .form-input--text').clear().type(data.invalidNumber);
            cy.get('.contacts__fields > :nth-child(2) > .form-control--max > .form-input--text').clear().type(data.invalidEmail);
            cy.get(':nth-child(3) > .form-control--max > .form-input--text').clear().type(data.invalidSite);
            cy.wait(1000);
            cy.get('.about-org > :nth-child(1) > .form-error > span').should('exist');
            cy.get(':nth-child(3) > :nth-child(1) > .form-error > span').should('exist');
            cy.get(':nth-child(3) > :nth-child(2) > .form-error > span').should('exist');
            cy.get('.contacts__fields > :nth-child(1) > .form-error > span').should('exist');
            cy.get('.contacts__fields > :nth-child(2) > .form-error > span').should('exist');
            cy.get(':nth-child(3) > .form-error > span').should('exist');
        });
    });
});
