describe('Авторизация', function () {
    
    it('Позитивынй кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get ('#mail').type('german@dolnikov.ru'); 
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').should('be.enabled'); 
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible'); 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
        })  

    it('Негативный кейс на авторизацию при неверном пароле', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get ('#mail').type('german@dolnikov.ru'); 
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#pass').type('iLoveqastudio'); 
        cy.get('#loginButton').should('be.enabled'); 
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible'); 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })  
    it('Негативный кейс на авторизацию при неверном логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#mail').type('german@dolnikovу.ru'); 
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').should('be.enabled'); 
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible'); 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })  
    it('Негативный кейс на авторизацию при отсутсвии собачки', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get ('#mail').type('germandolnikov.ru'); 
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').should('be.enabled'); 
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible'); 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })  
    it('Негативный кейс на авторизацию при приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get ('#mail').type('GerMan@Dolnikov.ru'); 
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').should('be.enabled'); 
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible'); 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })  
    it('Кейс на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })  
    describe('Покупка аватара в покемонах', function () {
   it('тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('gavrilichofficial@yandex.ru');
        cy.get('#password').type('Mishagavrilov1488');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
    })
})

})