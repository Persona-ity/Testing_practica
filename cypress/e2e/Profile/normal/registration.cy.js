describe('Попытка регистрации', () => {
    it('Попытка регистрации', () => {
        cy.fixture('url').then(url => {
            cy.log('Переход на страницу регистрации');
            cy.visit(url.registration);
        });

        cy.fixture('registration').then(data => {
            cy.log('Ввод логина');
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.login);

            cy.log('Ввод email');
            cy.get('.form-input--email')
                .type(data.email);

            cy.log('Ввод пароля');
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
                .type(data.password);

            cy.log('Повторный ввод пароля');
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
                .type(data.password);

            cy.wait(500);

            cy.log('Нажатие на кнопку регистрации');
            cy.get('.form__buttons > :nth-child(4)')
                .click();

            cy.log("Ввод фамилии");
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.lastname);

            cy.log("Ввод имени");
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
                .type(data.firstname);

            cy.wait(500);

            cy.log("Регистрация");
            cy.get('.form__buttons > :nth-child(3)')
                .click();
        });
    });
});
