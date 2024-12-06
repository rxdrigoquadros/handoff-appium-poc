const { waitForElementVisible } = require('../utils/helpers');

class ChatPage {
    get firstPillButton() {
        return $('android=new UiSelector().className("android.view.ViewGroup").instance(41)')
    }

    get sendButton() {
        
    }

    async clickFirstPillButton() {
        await waitForElementVisible(this.firstPillButton);
        await this.firstPillButton.click();
    }
}

module.exports = new ChatPage();
