const { waitForElementVisible } = require('../utils/helpers');

class ChatPage {
    get chatInput() {
        return $('android=new UiSelector().description("Type or talk to start estimating")')
    }

    get firstTemplateButton() {
        return $('android=new UiSelector().className("android.view.ViewGroup").instance(41)')
    }

    get sendButton() {
        return $('android=new UiSelector().description("󰁝")')
    }

    get reviewEstimateButton() {
        return $('android=new UiSelector().text("Review estimate")')
    }

    get createProposalButton() {
        return $('android=new UiSelector().text("Create proposal")')
    }

    get addClientButton() {
        return $('android=new UiSelector().text("Add Client")')
    }

    get filterClientInput() {
        return $('android=new UiSelector().className("android.widget.EditText")')
    }

    get filterClientButton() {
        return $('new UiSelector().className("android.view.ViewGroup").instance(48)')
    }

    get reviewSendButton() {
        return $('android=new UiSelector().text("Preview & Send")')
    }

    async enterChatInput(prompt) {
        const chatInputElement = await this.chatInput;
        await waitForElementVisible(chatInputElement);
        await chatInputElement.setValue(prompt);
    }

    async clickfirstTemplateButton() {
        await waitForElementVisible(this.firstTemplateButton);
        await this.firstTemplateButton.click();
    }

    async clickSendButton() {
        await waitForElementVisible(this.sendButton);
        await this.sendButton.click();
    }

    async clickReviewEstimateButton() {
        await waitForElementVisible(this.reviewEstimateButton);
        await this.reviewEstimateButton();
    }

    async clickCreateProposalButton() {
        await waitForElementVisible(this.createProposalButton);
        await this.createProposalButton();
    }

    async clickAddClientButton() {
        await waitForElementVisible(this.addClientButton);
        await this.addClientButton();
    }

    async enterClientName(clientName) {
        const filterClientElement = await this.filterClientInput;
        await waitForElementVisible(filterClientElement);
        await filterClientElement.setValue(clientName);
    }

    async clickFilterClientButton() {
        await waitForElementVisible(this.filterClientButton);
        await this.filterClientButton();
    }

    async clickReviewSendButton() {
        await waitForElementVisible(this.reviewSendButton);
        await this.reviewSendButton();
    }
}

module.exports = new ChatPage();
