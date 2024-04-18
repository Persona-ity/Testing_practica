describe('Создание потребности (отрицательный сценарий)', () => {
    it("Создание", () => {
        cy.fixture('url').then(url => {
            cy.log('Переход на страницу авторизации');
            cy.visit(url.login);
        });

        cy.fixture('auth_info').then(data => {
            cy.log('Ввод логина');
            cy.get('.form-input--text')
                .type(data.employerLogin);

            cy.log('Ввод пароля');
            cy.get('.form-input--password')
                .type(data.employerPassword);

            cy.wait(500);

            cy.log('Нажатие кнопки входа');
            cy.get(':nth-child(3) > .button')
                .click();
        });

        cy.fixture('need').then(data => {
            cy.log('Открытие вкладки "Потребности" в профиле');
            cy.get(':nth-child(6) > .menu-item__item-name')
                .click();

            cy.log("Создание потребности");
            cy.get('.needs-block__filters-wrapper > .button')
                .click();

            cy.log("Ввод недопустимого названия");
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
                .type(data.invalidName);

            cy.log("Ввод недопустимых обязанностей");
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area') 
                .type(data.invalidRequirements);

            cy.log("Ввод недопустимых требований");
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
                .type(data.invalidResponsibilities);

            cy.log("Проверка наличия сообщения об ошибке");
            cy.get('.labels > :nth-child(1) > .form-error > span')
                .should('exist');
        });
    });
});
