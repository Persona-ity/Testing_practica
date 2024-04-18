describe('Обновление организации', () => {
  it('Обновление', () => {
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

          cy.get(':nth-child(3) > .button')
              .click();
      });

      cy.fixture('updateOrganization').then(data => {
          cy.log("Вкладка организации");
          cy.get(':nth-child(4) > .menu-item__item-name')
              .click();

          cy.wait(500);
1
          cy.log("Ввод названия");
          cy.get('.about-org > :nth-child(1) > .form-control--max > .form-input--text')
              .clear()
              .type(data.name);

          cy.log("Ввод описания");
          cy.get('.form-area')
              .clear()
              .type(data.description);

          cy.log("Ввод контактного лица");
          cy.get(':nth-child(3) > :nth-child(1) > .form-control--max > .form-input--text')
              .clear()
              .type(data.face);

          cy.log("Ввод адреса");
          cy.get(':nth-child(3) > :nth-child(2) > .form-control--max > .form-input--text')
              .clear()
              .type(data.street);

          cy.log("Ввод номера телефона");
          cy.get('.contacts__fields > :nth-child(1) > .form-control--max > .form-input--text')
              .clear()
              .type(data.number);

          cy.log("Ввод электронной почты");
          cy.get('.contacts__fields > :nth-child(2) > .form-control--max > .form-input--text')
              .clear()
              .type(data.email);

          cy.log("Ввод сайта");
          cy.get(':nth-child(3) > .form-control--max > .form-input--text')
              .clear()
              .type(data.site);

          cy.wait(1000);

          cy.log("Кнопка сохранить");
          cy.get('.edit-form__button > .button')
              .click();
      });
  });
});
