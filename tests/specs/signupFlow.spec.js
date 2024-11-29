const signupPage = require('../pages/signupPage');
const logger = require('../utils/logger');
const expect = require('expect.js');
const { faker } = require('@faker-js/faker');

describe('Sign up Flow', () => {
    it.only('Should sign up using correct data', async () => {
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
    })
})