const loginPage = require('../pages/loginPage');
const logger = require('../utils/logger');

describe('Login Flow', () => {
    it('should log in using phone number', async () => {
        logger.info('Starting the login flow...');

        // Step 1: Click the "Log in" button
        await loginPage.clickLoginButton();
        logger.info('Clicked "Log in" button');

        // Step 2: Choose "Phone" as the login method
        await loginPage.selectPhoneOption();
        logger.info('Chosen "Phone" login option');

        // Step 3: Enter the phone number
        await loginPage.enterPhoneNumber(process.env.LOGIN_PHONE);

        // Step 4: Click the "Continue" button
        await loginPage.clickContinueButton();
        logger.info('Clicked "Continue" button');

        // Step 5: Enter the SMS code
        await loginPage.enterSmsCode(process.env.SMS_VALIDATION);
        logger.info('Entered SMS code');

        // Step 6: Verify if logged in successfully
        const isLoginSuccessful = await loginPage.verifyLoginSuccess();
        logger.info('Login successful, estimate screen displayed');

        // Assertion (example)
        expect(isLoginSuccessful).to.be.true;
        logger.info('Login test completed successfully');
    });
});
