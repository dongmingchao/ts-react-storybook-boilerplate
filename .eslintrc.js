module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint-config-ali/typescript/react",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "react/prop-types": [0],
        "react/jsx-closing-bracket-location": [1, 'after-props']
    }
};