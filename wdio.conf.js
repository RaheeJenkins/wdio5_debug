exports.config = {

    hostname: 'seetestcloud_url',
    port: 443,
    path: '/wd/hub',
    protocol: 'https',

    specs: [
        './test/specs/**/*.js'
    ],

    capabilities: [{
        'experitest:accessKey': '',
        udid: '',
        dontGoHomeOnQuit: true,
        platformName: 'iOS',
        automationName: 'XCUITest',
        browserName: 'Safari'
    }],

    maxInstances: 10,
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    ignoredWorkerServices: []
}
