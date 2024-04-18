describe('Попытка регистрации', () => {
    it('Попытка регистрации', () => {
        cy.fixture('url').then(url => {
            cy.log('Переход на страницу регистрации');
            cy.visit(url.registration);
        });

        cy.fixture('registration').then(data => {
            cy.log('Ввод неправильного логина');
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.invalidLogin);

            cy.log('Ввод неправильного email');
            cy.get('.form-input--email')
                .type(data.invalidEmail);

            cy.log('Ввод неправильного пароля');
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
                .type(data.invalidPassword);

            cy.log('Повторный ввод неправильного пароля');
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
                .type(data.invalidPassword2);

            cy.log('Проверка валидатора');
            cy.get(':nth-child(1) > .form-error > span')
                .should('exist');
            cy.get(':nth-child(2) > .form-error > span')
                .should('exist');
            cy.get(':nth-child(3) > .form-error > span')
                .should('exist');
            cy.get(':nth-child(4) > .form-error > span')
                .should('exist');

            cy.wait(2000);

            cy.log('Очистка полей');
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').clear();
            cy.get('.form-input--email').clear();
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').clear();
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').clear();

            cy.log('Ввод правильного логина');
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.login);

            cy.log('Ввод правильного email');
            cy.get('.form-input--email')
                .type(data.email);

            cy.log('Ввод правильного пароля');
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
                .type(data.password);

            cy.log('Повторный ввод правильного пароля');
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
                .type(data.password);

            cy.wait(2000);

            cy.log('Клик по кнопке регистрации');
            cy.get('.form__buttons > :nth-child(4)')
                .click();

            cy.log("Ввод неправильной фамилии");
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.invalidLastname);

            cy.log("Ввод неправильного имени");
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
                .type(data.invalidFirstname);

            cy.log("Проверка валидатора");
            cy.get(':nth-child(1) > .form-error > span')
                .should('exist');
            cy.get(':nth-child(2) > .form-error > span')
                .should('exist');
        });
    });
});
