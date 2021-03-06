module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-order'],
  rules: {
    'alpha-value-notation': 'number',
    'no-descending-specificity': true,
    'order/order': [
      'dollar-variables',
      { type: 'at-rule', name: 'extend' },
      { type: 'at-rule', name: 'include' },
      'declarations',
      { type: 'at-rule', name: 'include', hasBlock: true },
      'at-rules',
      'rules',
    ],
    'order/properties-alphabetical-order': true,
    'plugin/no-unsupported-browser-features': [true, { severity: 'warning' }],
    'selector-pseudo-element-no-unknown': true,
    'string-quotes': 'single',
  },
}
