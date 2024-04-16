describe('Создание стажировки', () => {
    it('Создание', () => {

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

        cy.fixture('internship').then(data => {
            cy.log('Открытие вкладки "Стажировки" в профиле');
            cy.get(':nth-child(8) > .menu-item__item-name')
                .click();

            cy.log("Создание стажировки");
            cy.get('[data-v-b4b9d629=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
                .click();
            
            cy.log("Ввод названия должности");
            cy.get(".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--")
                .type(data.jobTitle);

            cy.log("Ввод даты начала");
            cy.get(".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control--responsive > .form-input--date")
                .type(data.startDate);

            cy.log("Ввод даты окончания");
            cy.get(".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control--responsive > .form-input--date")
                .type(data.endDate);

            cy.log("Ввод требований");
            cy.get(".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area")
                .type(data.requirements);

            cy.log("Ввод обязанностей");
            cy.get(".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(7) > .form-control > .form-area")
                .type(data.responsibilities);

            cy.log("Нажатие кнопки создания");
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button')
                .click();
        });
    });
});
