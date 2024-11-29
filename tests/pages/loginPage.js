
const { waitForElementVisible } = require('../utils/helpers'); // Importa helper para esperar o elemento

class LoginPage {
    // Elementos da tela de login
    get loginButton() {
        return $('//android.widget.Button[@text="Log in"]'); // Localizador do botão "Log in"
    }

    get phoneOptionButton() {
        return $('//android.widget.Button[@text="Phone"]'); // Localizador do botão "Phone"
    }

    get phoneInput() {
        return $('//android.widget.EditText[@content-desc="phone-input"]'); // Localizador do campo de telefone
    }

    get continueButton() {
        return $('//android.widget.Button[@text="Continue"]'); // Localizador do botão "Continue"
    }

    get smsInput() {
        return $('//android.widget.EditText[@content-desc="sms-code-input"]'); // Localizador do campo de código SMS
    }

    get successMessage() {
        return $('//android.widget.TextView[@text="Estimates"]'); // Localizador da mensagem de sucesso (ajustar conforme necessário)
    }

    // Método para clicar no botão "Log in"
    async clickLoginButton() {
        await waitForElementVisible(this.loginButton);
        await this.loginButton.click();
    }

    // Método para selecionar "Phone" como método de login
    async selectPhoneOption() {
        await waitForElementVisible(this.phoneOptionButton);
        await this.phoneOptionButton.click();
    }

    // Método para inserir o número de telefone
    async enterPhoneNumber(phoneNumber) {
        const phoneInputElement = await this.phoneInput;
        await waitForElementVisible(phoneInputElement);
        await phoneInputElement.setValue(phoneNumber); // Passa o telefone para o campo
    }

    // Método para clicar no botão "Continue"
    async clickContinueButton() {
        await waitForElementVisible(this.continueButton);
        await this.continueButton.click();
    }

    // Método para inserir o código SMS
    async enterSmsCode(smsCode) {
        const smsInputElement = await this.smsInput;
        await waitForElementVisible(smsInputElement);
        await smsInputElement.setValue(smsCode); // Passa o código SMS para o campo
    }

    // Método para verificar se o login foi bem-sucedido (mensagem de boas-vindas)
    async verifyLoginSuccess() {
        const successMessageElement = await this.successMessage;
        await waitForElementVisible(successMessageElement);
        return successMessageElement.isDisplayed();
    }
}

module.exports = new LoginPage();
