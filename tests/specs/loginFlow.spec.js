const loginPage = require('../pages/loginPage');
const smsVerificationPage = require('../pages/smsVerificationPage')
const estimatesPage = require('../pages/estimatesPage');
const logger = require('../utils/logger');
const expect = require('expect.js');

describe('Happy path for existent user', () => {
    it('Should be log in using phone number', async () => {
        logger.info('Starting the login flow...');

        await loginPage.clickLoginButton();
        logger.info('Clicked "Log in" button');


        await loginPage.selectPhoneOption();
        logger.info('Chosen "Phone" login option');


        await loginPage.enterPhoneNumber(process.env.LOGIN_PHONE);
        logger.info('Entered "Phone" login');


        await loginPage.clickContinueButton();
        logger.info('Clicked "Continue" button');

        await smsVerificationPage.enterSmsCode(process.env.SMS_VALIDATION);
        logger.info('Entered SMS code');

        await smsVerificationPage.clickVerifyButton();
        logger.info('Clicked "Verify" button');

        const isLoginSuccessful = await estimatesPage.verifySuccess();
        logger.info('Sign up successful, estimate screen displayed');

        expect(isLoginSuccessful).to.be.true;
        logger.info('Sign up test completed successfully');
    });

    it('Should be create a new estimate')
});
