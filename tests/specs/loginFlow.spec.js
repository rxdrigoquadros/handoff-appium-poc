const loginPage = require('../pages/loginPage');
const logger = require('../utils/logger');
const expect = require('expect.js');
const estimatesPage = require('../pages/estimatesPage');

describe('Happy path for existent user', () => {
    it('should log in using phone number', async () => {
        logger.info('Starting the login flow...');

        await loginPage.clickLoginButton();
        logger.info('Clicked "Log in" button');


        await loginPage.selectPhoneOption();
        logger.info('Chosen "Phone" login option');


        await loginPage.enterPhoneNumber(process.env.LOGIN_PHONE);
        logger.info('Entered "Phone" login');


        await loginPage.clickContinueButton();
        logger.info('Clicked "Continue" button');


        await smsverificationPage.enterSmsCode(process.env.SMS_VALIDATION);
        logger.info('Entered SMS code');


        await smsVerificationPage.clickVerifyButton();
        logger.info('Clicked "Verify" button');


        const isLoginSuccessful = await estimatesPage.verifyLoginSuccess();
        logger.info('Login successful, estimate screen displayed');


        expect(isLoginSuccessful).to.be.true;
        logger.info('Login test completed successfully');
    });
});
