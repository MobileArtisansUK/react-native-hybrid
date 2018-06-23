module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js"] }]
  },
  env: {
    jest: true
  }
};
