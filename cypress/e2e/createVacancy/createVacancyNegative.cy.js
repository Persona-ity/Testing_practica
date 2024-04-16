describe('Создание вакансии (отрицательный сценарий)', () => {
    it("Создание", () => {
        cy.fixture('url').then(url => {
            cy.log('Переход на страницу авторизации');
            cy.visit(url.login);
        });

        cy.fixture('auth').then(data => {
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

        cy.fixture('vacancy').then(data => {
            cy.log('Открытие вкладки "Вакансии" в профиле');
            cy.get(':nth-child(7) > .menu-item__item-name')
                .click();

            cy.log("Создание вакансии");
            cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
                .click();

            cy.log("Ввод недопустимого названия");
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
                .type(data.invalidName);

            cy.log("Ввод недопустимых требований");
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
                .type(data.invalidResponsibilities);

            cy.log("Ввод недопустимых обязанностей");
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
                .type(data.invalidRequirements);

            cy.log("Проверка наличия сообщения об ошибке");
            cy.get('.labels > :nth-child(1) > .form-error > span')
                .should('exist');
        });
    });
});
