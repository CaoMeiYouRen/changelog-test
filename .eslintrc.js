const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
    root: true,
    extends: [
        'cmyr',
    ],
    rules: {
        'no-console': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-shadow': 0,
    },
}
