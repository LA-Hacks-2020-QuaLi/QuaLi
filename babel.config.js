module.exports = {
    "presets": [
        ["@babel/preset-env", {"targets": {"node": "current"}}],
        "@babel/preset-react",
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
        ["module-resolver", {
            "root": ["/"],
            "alias": require('./config/module-aliases'),
            extensions: ['.js', ".jxs"],
        }],
    ]
  }
