module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    transformIgnorePatterns: ["/node_modules/"],
};