exports.config = {
    framework: 'mocha',

    services: [
        ['appium', {
            args: {
                address: '127.0.0.1',
                port: 4723,
            },
            command: 'appium'
        }]
    ],

    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'RQ8M909W7BF', //pixel_6_pro
        'appium:appPackage': 'com.onebuild.handoff',
        'appium:appActivity': 'com.onebuild.handoff.MainActivity',
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
        'appium:fullContextList': true,
        'appium:newCommandTimeout': 240,
    }],

    // Definindo o reporter, incluindo Mochawesome
    reporters: ['mochawesome'],

    // Opções de reporter
    mochaOpts: {
        ui: 'bdd',        // Estilo BDD do Mocha
        timeout: 60000    // Timeout para os testes
    },

    // Definindo o log
    logLevel: 'info',  // O nível de log, pode ser 'info', 'debug', 'warn', etc.

    // Especificando a pasta onde os arquivos de teste estão
    specs: [
        './tests/specs/**/*.js'  // Defina o caminho correto para os testes
    ],

    /*onPrepare: () => {
        console.log('Preparing for the tests...');
    },

    onComplete: () => {
        console.log('All tests completed!');
    }*/
};
