module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react',
    ['@babel/preset-typescript', { isTsx: true, allExtension: true }],
  ],
  plugins: [
    'add-react-displayname',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-object-rest-spread',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'babel-plugin-typescript-to-proptypes',
  ],
};