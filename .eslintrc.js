
module.exports = {
  extends: ["next", "next/core-web-vitals"],
  rules: {
    "@next/next/no-img-element": 0, // TODO: Remove when Image component is updated
    "react/display-name": 0,
    "no-unused-vars": 1,
    "react/no-unknown-property": 0,
  },
};
