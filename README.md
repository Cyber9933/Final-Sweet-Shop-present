# 🍭 Sweet Shop - Cypress E2E Testing Suite

## Project Description

Sweet Shop is an e-commerce website dedicated to selling retro sweets and candies. This project is designed for a final thesis and includes a comprehensive Cypress E2E testing suite for testing the website [🍬SWEETSHOP](#https://sweetshop.netlify.app/).

## 🎯 Project Goals

- Learn Cypress E2E testing principles
- Automate web application testing
- Ensure website functionality quality
- Verify cross-browser compatibility
- Evaluate performance and accessibility aspects

## 🛍️ Target Website

**URL:** [🍬SWEETSHOP](#https://sweetshop.netlify.app/)

**Products:**
- Candy Chocolate Cups (£1.00)
- Rainbow Dust Straws (£0.75) 
- UFO's Sherbert Filled Flying Saucers (£0.95)
- Pink Strawberry Bonbons

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

### ⚡ Performance Tests
- Page loading speed measurement
- Console error checking
- Resource loading verification


## 🚀 Installation & Setup

### Requirements
- Node.js (v14 or newer)
- npm 

### Installation Steps

1. **Clone the project**
```bash
git clone <repository-url>
cd sweetshop-cypress-tests
```

2. **Install dependencies**
```bash
npm install
```

3. **Install Cypress**
```bash
npm install cypress --save-dev
```

4. **Create Cypress folder structure**
```
├── cypress/
│   ├── e2e/
│   │   ├── TS01-page-loading.cy.js
│   │   ├── TS02-navigation-menu.cy.js
│   │   ├── TS03-sweets-page.cy.js
│   │   ├── TS04-about-page.cy.js
│   │   ├── TS05-shopping-basket.cy.js
│   │   ├── TS06-login-page.cy.js
│   │   └── TS07-checkout-process.cy.js
│   └── support/
│       ├── e2e.js
│       └── commands.js
├── .github/
│   └── workflows/
│       └── cypress-tests.yml
├── cypress.config.js
├── package.json
└── README.md
```

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
npx cypress run --spec "cypress/e2e/sweetshop.cy.js"
```

### Different Browsers
```bash
# Chrome
npx cypress run --browser chrome

# Firefox
npx cypress run --browser firefox

# Edge
npx cypress run --browser edge
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

## 📱 Viewport Testing

Tested devices:
- **Desktop**: 1280x720
- **Tablet**: 768x1024  
- **Mobile**: 375x667 (iPhone X)
- **Custom viewports**

## 🛠️ Custom Commands

Created convenience commands:

```javascript
// Add item to cart
cy.addToCartIfExists('Candy Chocolate Cups');

// Check price
cy.checkPrice('£1.00');

// Search product
cy.searchProduct('chocolate');
```

## 📈 Test Reports

### HTML Reports
```bash
npm install --save-dev cypress-mochawesome-reporter
npx cypress run --reporter cypress-mochawesome-reporter
```

### Screenshots and Video
- Automatically generated on failures
- Saved to `cypress/screenshots/` and `cypress/videos/`

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
- Can use `cy.debug()` and `cy.pause()`



## 🚦 CI/CD Integration

### GitHub Actions
```yaml
name: Cypress Tests
on: [push, pull_request]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Cypress run
        uses: cypress-io/github-action@v5
        with:
          start: npm start
          wait-on: 'http://localhost:3000'
```

## 📊 Results Analysis

### Successful Test Criteria
- ✅ All tests pass (100% pass rate)
- ✅ Page loading < 5s
- ✅ No console errors
- ✅ Mobile responsive works

### Possible Issues
- Network timeouts
- Element selector changes
- Performance bottlenecks

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
- [Cypress Examples](https://github.com/cypress-io/cypress-example-kitchensink)

## 🏆 Final Thesis Criteria

### Demonstrated Aspects:
- [x] Understanding of E2E testing process
- [x] Cypress framework usage
- [x] Test scenarios creation
- [x] Automated testing pipeline
- [x] Performance and accessibility testing
- [x] Cross-browser testing
- [x] Mobile responsive testing
- [x] Test reporting and documentation

### Project Evaluation:
- **Functionality:** 25%
- **Test Quality:** 25% 
- **Documentation:** 20%
- **Performance:** 15%
- **Accessibility:** 15%

## 📞 Contact

**Project Author:** [Lina Panavaitė]  
**Email:** [linate.pa@gmail.com]  
**GitHub:** [github.com/Cyber9933]  

---

## 📄 License

This project is intended for educational purposes for final thesis.

---

*Sweet Shop Cypress Testing Suite - Automated e-commerce website testing* 🍭✨