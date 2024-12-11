const signupPage = require('../pages/signupPage');
const smsVerificationPage = require('../pages/smsVerificationPage')
const estimatesPage = require('../pages/estimatesPage');
const chatPage = require('../pages/chatPage')
const logger = require('../utils/logger');
const expect = require('expect.js');
const { faker } = require('@faker-js/faker');

describe('Happy path for new user', () => {
    it('Should sign up using correct data', async () => {
        logger.info('Starting the login flow...');

        let firstName = faker.name.firstName();
        console.log(firstName);
        let lastName = faker.name.lastName();
        console.log(lastName)
        let fullName = `${firstName} ${lastName}`;
        console.log(fullName)

        await signupPage.enterFullName(fullName)
        logger.info('Entered a random full name')

        await signupPage.enterCompany(faker.company.name())
        logger.info('Entered a random company name')

        await signupPage.enterEmail(faker.internet.email({
            firstName: firstName,
            lastName: lastName,
            provider: 'qa-handoff.ai'
        }))
        logger.info('Entered a random email')

        /*
        await signupPage.enterPhone(faker.phone.number('##########'));
        logger.info('Entered a random phone number')
        */

        await signupPage.enterPhone(process.env.LOGIN_PHONE);
        logger.info('Entered a random phone number')

        await signupPage.clickGetStartedFreeButton();
        logger.info('Clicked "Get started free" button');

        await smsVerificationPage.enterSmsCode(process.env.SMS_VALIDATION);
        logger.info('Entered SMS code');

        await smsVerificationPage.clickVerifyButton();
        logger.info('Clicked "Verify" button');

        const isSignUpSuccessful = await estimatesPage.verifySuccess();
        logger.info('Login successful, estimate screen displayed');

        expect(isSignUpSuccessful).to.be.true;
        logger.info('Login test completed successfully');
    });

    it('Should be create a new estimate using custom prompt', async () => {
        logger.info('Starting the estimate creation flow using custom prompt');

        await chatPage.enterChatInput('This kitchen remodel is 15 inches x 10 inches with 9 inches ceilings. Scope includes: complete demo, drywall, 12x12 tile floor, base and upper cabinets, quartz countertops, 12 inches mosaic backsplash, new sink, outlets, recessed lights, appliances, baseboard, and painting. No layout changes. Use mid grade finishes.');
        logger.info('Enter custom prompt in the chat input');

        await chatPage.clickSendButton();
        logger.info('Clicked "Send" button');

        await chatPage.clickReviewEstimateButton();
        logger.info('Clicked "Review estimate" button');

        await chatPage.clickCreateProposalButton();
        logger.info('Clicked "Create proposal" button');

        await chatPage.clickAddClientButton();
        logger.info('Clicked "Add client" button');

        await chatPage.clickFilterClientButton("Pablo");
        logger.info('Entered SMS code');

        await chatPage.clickReviewSendButton();
        logger.info('Clicked "Review & Send" button');
    })

    it('Should be update a existent estimate manually', async () => {
        logger.info('Starting the estimate creation flow...');

        await estimatesPage.clicknewEstimateButton();
        logger.info('Clicked "Continue" button');
    })
});