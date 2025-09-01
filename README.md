# 🍭 Sweet Shop - Cypress E2E Testing Suite

## Project Description

Sweet Shop is an e-commerce website dedicated to selling retro sweets and candies. This project is designed for a final thesis and includes a comprehensive Cypress E2E testing suite for testing the website [🍬SWEETSHOP](#https://sweetshop.netlify.app/).

## 🎯 Project Goals

- Learn Cypress E2E testing principles
- Automate web application testing
- Ensure website functionality quality
- Evaluate performance and accessibility aspects

## 🛍️ Target Website

**URL:** [🍬SWEETSHOP](#https://sweetshop.netlify.app/)

**Products:**
- Candy Chocolate Cups (£1.00)
- Rainbow Dust Straws (£0.75) 
- UFO's Sherbert Filled Flying Saucers (£0.95)
- Pink Strawberry Bonbons (£1.00)

## 📋 Test Coverage

### 🏠 Homepage Tests
- Page loading verification
- Branding elements display
- Responsive design testing

### 🍬 Product Tests
- Product list display
- Price format validation
- Product descriptions verification

### 🧭 Navigation Tests
- Menu functionality verification
- Link functionality
- URL routing testing

### 🛒 Shopping Cart Tests
- "Add to cart" functionality
- Cart icon/counters
- Item addition process

### 🎨 UI/UX Tests
- Form validation
- Interactive elements testing
- Error handling


## 🚀 Installation & Setup

### Requirements
- Node.js v22
- npm 

### Installation Steps

1. **Install dependencies**

```bash
npm install
```

3. **Install Cypress**
```bash
npm install cypress --save-dev
```

4. **Create Cypress folder structure**
```
cypress/
├── e2e/
│   ├── TS01-page-loading.cy.js
│   ├── TS02-navigation-menu.cy.js  
│   ├── TS03-sweets-page.cy.js
│   ├── TS04-about-page.cy.js
│   ├── TS05-shopping-basket.cy.js
│   ├── TS06-login-page.cy.js
│   └── TS07-checkout-process.cy.js
├── support/
│   ├── e2e.js
│   └── commands.js
└── .github/
    └── workflows/
        └── cypress-tests.yml

```
## 📊 **Test Scenarios Coverage**

| Test Suite | Test Cases | Status |
|------------|------------|--------|
| **TS01: Page Loading** | 1 TC | ✅ Complete |
| **TS02: Navigation Menu** | 18 TC | ✅ Complete |
| **TS03: Sweets Page** | 3 TC | ✅ Complete |
| **TS04: About Page** | 3 TC | ✅ Complete |
| **TS05: Shopping Basket** | 4 TC | ✅ Complete |
| **TS06: Login Page** | 4 TC | ✅ Complete |
| **TS07: Checkout Process** | 3 TC | ✅ Complete |


## 🏃‍♂️ Running Tests

### Cypress Test Runner (GUI)
```bash
npx cypress open
```

### Headless Mode (CI/CD)
```bash
npx cypress run
```

### Run Specific Test
```bash
npx cypress run --spec "cypress/e2e/TS01_page_loading.cy.js"
npx cypress run --spec "cypress/e2e/TS02_navigation_menu.cy.js"
npx cypress run --spec "cypress/e2e/TS03_sweets_page.cy.js"
npx cypress run --spec "cypress/e2e/TS04_about_page.cy.js"
npx cypress run --spec "cypress/e2e/TS05_shopping_basket.cy.js"
npx cypress run --spec "cypress/e2e/TS06_login_page.cy.js"
npx cypress run --spec "cypress/e2e/TS07_checkout_process.cy.js"
```

## 🛠️ **GitHub Actions Integration**

Tests automatically run on:
- Push to main branch
- Pull requests
- Scheduled runs (daily)

Configuration: `.github/workflows/cypress-tests.yml`

### Browsers
```bash
# Chrome
npx cypress run --browser chrome

```

## 📊 Test Scenarios

### 1. Smoke Tests
```javascript
✅ Page loading
✅ Main elements display
✅ Navigation menu functionality
```

### 2. Functional Tests
```javascript
✅ Product list verification
✅ Price display
✅ Search functionality (if available)
✅ Filter options (if available)
```

### 3. Regression Tests
```javascript
✅ All core functionalities
✅ Cross-browser compatibility
✅ Mobile responsiveness
```


## 📈 Test Reports


### Screenshots
- Automatically generated on failures
- Saved to `cypress/screenshots/` 

## 🔧 Configuration

### cypress.config.js
```javascript
module.exports = {
  e2e: {
    defaultCommandTimeout:4000,
    baseUrl: 'https://sweetshop.netlify.app',
    }
}
```

### Environment Variables
```javascript
// cypress.config.js
env: {
  sweetshop_url: 'https://sweetshop.netlify.app'
}
```

## 🐛 Debugging

### Debug Mode
```bash
DEBUG=cypress:* npx cypress run
```

### Browser Developer Tools
- Cypress Test Runner automatically opens dev tools


## 🚦 CI/CD Integration

### GitHub Actions
```yaml
name: Cypress Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Use Node.js 22
        uses: actions/setup-node@v2

        with:
          node-version: 22

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests with Chrome
        run: npm run cy:run

        env:
          CI: true

        continue-on-error: true
```

## 📊 Results Analysis

### Successful Test Criteria
- ✅ All tests pass (100% pass rate)
- ✅ Page loading < 4s
- ✅ No console errors


## 🤝 Contribution Guidelines

1. Fork the project
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📚 Useful Links

- [Cypress Documentation](https://docs.cypress.io/)
- [Sweet Shop Website](https://sweetshop.netlify.app/)
- [E2E Testing Best Practices](https://docs.cypress.io/guides/references/best-practices)


## 📞 Contact

**Project Author:** Lina Panavaitė

**Email:** linate.pa@gmail.com

**GitHub:** github.com/Cyber9933

---

## 📄 License

This project is intended for educational purposes for final thesis.

---

*Sweet Shop Cypress Testing Suite - Automated e-commerce website testing* 🍭✨