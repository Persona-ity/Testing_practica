describe('Cypress Tests', () => {
    it('None-existent login test', () => {
        cy.fixture('cypressTest').then(data => {
            су.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            су.log('Ввод несуществующего логина')
            cy.get('input[id = "passp-field-login"]')
                .type(data.none_existent_login)

            су.log('Клик по кнопке "Войти"')
            cy.get('div[class="passp-button passp-sign-in-button"] button [type="submit"]')
                .click()

            су.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class= "passp-form-field_error"]')
                .should('exist')
        })
    })

    it('None-existent password test', () => {
        cy.fixture('cypress Test').then(data => {
            су.log('Переход на страницу авторизации') 
            cy.visit(data.main_url)
    
            су.log('Ввод логина')
            cy.get('input[id="passp-field-login"]')
                .type(data.login)
    
            су.log('Клик по кнопке "Войти"')
            cy.get('div[class="passp-button passp-sign-in-button"] button [type="submit"]')
                .click()
            // ожидаем 2 секунды для появления формы ввода пароля 
            cy.wait(2000);
    
            су.log('Ввод несуществующего пароля') 
            cy.get('input[id="passp-field-passwd"]')
                .type(data.none_existent_password)
    
            су.log('Клик по кнопке "Войти"')
            cy.get('div[class="passp-button passp-sign-in-button"] button [type="submit"]')
                .click()
    
            су.log('Проверка что появился элемент сигнализирующий об ошибке') 
            cy.get('div[class= "passp-form-field_error"]')
                .should('exist')
        });
    });
})