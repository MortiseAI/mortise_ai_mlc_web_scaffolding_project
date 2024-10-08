module.exports = {
    presets: [
        ['@babel/preset-env', {modules: false}],
        '@babel/preset-react',
        '@babel/preset-typescript'],
    "plugins": [
        ["@babel/plugin-proposal-decorators", {"legacy": true}],
        ["@babel/plugin-proposal-class-properties", {"loose": true}],
        ["@babel/plugin-proposal-private-methods", {"loose": true}],
        ["@babel/plugin-proposal-private-property-in-object", {"loose": true}]
    ],
    compact: false
};
