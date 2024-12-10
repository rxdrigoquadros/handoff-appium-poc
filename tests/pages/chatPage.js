const { waitForElementVisible } = require('../utils/helpers');

class ChatPage {
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
}

module.exports = new ChatPage();
