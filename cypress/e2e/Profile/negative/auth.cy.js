describe('Попытка аутентификации', () => {
    it('Отрицательная попытка входа', () => {
        cy.fixture('url').then(url => {
            cy.log('Открытие страницы авторизации');
            cy.visit(url.login);
        });

        cy.fixture('auth_info').then(data => {

            cy.log('Ввод неверного логина');
            cy.get('.form-input--text')
                .type(data.none_existent_login);

            cy.log('Ввод неверного пароля');
            cy.get('.form-input--password')
                .type(data.none_existent_password);

            cy.wait(500);

            cy.get(':nth-child(3) > .button')
                .click();

            cy.get('.form-error > span')
                .should('exist');
        });   
    });
});
