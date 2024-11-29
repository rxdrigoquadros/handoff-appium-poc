# 🚀 Handoff Test Automation - PoC

![Appium](https://img.shields.io/badge/Appium-v2.0.0-purple?style=for-the-badge&logo=appium)
![MochaJS](https://img.shields.io/badge/MochaJS-v10.0.0-orange?style=for-the-badge&logo=mocha)
![Node.js](https://img.shields.io/badge/Node.js-v18.0.0-green?style=for-the-badge&logo=node.js)
![Selenium](https://img.shields.io/badge/Selenium-v4.11.0-brightgreen?style=for-the-badge&logo=selenium)

## 📖 About the Project

This repository contains a **Proof of Concept (PoC)** for automating tests of the **Handoff** app using **Appium** and **MochaJS**. The goal is to evaluate the feasibility of mobile test automation (Android and iOS) for critical scenarios, ensuring the app's quality and stability.

## 🛠️ Technologies Used

- **[Appium](https://appium.io/)**: Mobile application automation framework.
- **[MochaJS](https://mochajs.org/)**: JavaScript test framework for asynchronous testing.
- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment.
- **[Chai](https://www.chaijs.com/)**: Assertion library for testing.
- **[WebDriver](https://www.selenium.dev/documentation/webdriver/)**: UI interaction layer for automated tests.

---

## 📂 Project Structure

```plaintext
handoff-poc/
├── src/
│   ├── configs/
│   │   ├── capabilities.js      # Appium capabilities configuration
│   │   ├── environment.js       # Environment variables and URLs
│   │   └── appium-server.js     # Appium server configuration
│   └── utils/
│       └── helpers.js           # Reusable utility functions
├── tests/
│   ├── specs/
│   │   ├── login.spec.js        # Login flow test cases
│   │   └── ...                  # Other test cases
│   ├── data/
│   │   └── test-data.json       # Static test data
│   └── pages/
│       ├── login.page.js        # Login Page Object
│       └── ...                  # Other Page Objects
├── reports/
│   └── mochawesome-report/      # Generated reports
├── .env                         # Environment configurations
├── package.json                 # Project dependencies and scripts
└── README.md                    # Documentation
