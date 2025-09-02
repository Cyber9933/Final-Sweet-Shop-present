# 🍭 Sweet Shop - Cypress E2E Testing Suite

## Project Description

Sweet Shop is an e-commerce website dedicated to selling retro sweets and candies. This project is designed for a final thesis and includes a comprehensive Cypress E2E testing suite for testing the website [🍬SWEETSHOP](#https://sweetshop.netlify.app/).
The Sweet Shop application serves as a demonstration platform that intentionally incorporates common web development issues to showcase testing methodologies and debugging techniques. As stated by the original developers, this is "an intentionally broken web application to help demonstrate Chrome DevTools" and encompasses real-world scenarios that QA engineers encounter when testing e-commerce platforms.
The project demonstrates practical application of modern testing frameworks in identifying functionality gaps, user interface inconsistencies, and performance bottlenecks that could affect customer satisfaction and conversion rates.
The implementation utilizes structured documentation through testCases.md for comprehensive test case specifications, proper version control practices with .gitignore configuration, automated dependency management via package.json, and CI/CD integration through GitHub Actions workflows. The project architecture incorporates Cypress configuration files, custom commands, and organized test suites that follow industry best practices for maintainable test automation.



## 🎯 Project Goals

- Learn Cypress E2E testing principles
- Automate web application testing
- Ensure website functionality quality
- Evaluate performance and accessibility aspects

## 🛍️ Target Website

**URL:** [🍬SWEETSHOP](#https://sweetshop.netlify.app/)

## 📊 **Test Scenarios Coverage**

| Test Suite | Test Cases | Status |
|------------|------------|--------|
| **TS01: Homepage** | 1 TC | ✅ Complete |
| **TS02: Navigation Menu** | 18 TC | ✅ Complete |
| **TS03: Sweets Page** | 3 TC | ✅ Complete |
| **TS04: About Page** | 3 TC | ✅ Complete |
| **TS05: Shopping Basket** | 4 TC | ✅ Complete |
| **TS06: Login Page** | 4 TC | ✅ Complete |
| **TS07: Checkout Process** | 3 TC | ✅ Complete |



### Create Cypress folder structure
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
        └── node.js.yml

```
## 🚀 Installation & Setup

### Requirements
- Node.js v22
- npm 

### Installation Steps
1. **Clone**
```bash
git clone https://github.com/Cyber9933/Final-Sweet-Shop-present.git
cd final_candy_shop
```

2. **Install dependencies**

```bash
npm install
```

3. **Install Cypress**
```bash
npm install cypress --save-dev
```




## 🏃‍♂️ Running Tests

### Cypress Test Runner (GUI)
```bash
npm run cypress:open
```

### Headless Mode 
```bash
npm run cypress:run
```

### Run Specific Test
```bash
# npx cypress run --spec "file name"
npx cypress run --spec "cypress/e2e/TS01_page_loading.cy.js"

```

## 🛠️ **GitHub Actions Integration**

Tests automatically run on:
- Push to main branch
- Pull requests to main branch


Configuration: `.github/workflows/node.js.yml`

### Browsers
```bash
# Chrome
npx cypress run --browser chrome

```

## 📊 Test Methods

### 1. Smoke Tests
```javascript
✅ Homepage loading and title verification
✅ Sweet Shop branding elements display
✅ Navigation menu visibility
✅ Primary links functionality (Home, Sweets, About, Login, Basket)
✅ "Browse sweets" page loading
✅ Product catalog display
```

### 2. Functional Tests
```javascript
✅ Navigation between all pages from all pages
✅ URL routing verification
✅ Page headers validation
✅ All products display with prices
✅ Product information accuracy (Wham Bars £0.15, Chocolate Cups £1.00)
✅ Product images and accessibility verification
✅ Adding items to basket
✅ Basket content display
✅ Removing items from basket
✅ Empty basket state handling
✅ Login form accessibility
✅ Form field validation
✅ Error handling for incorrect credentials

```

### 3. Regression Tests
```javascript
✅ About page content quality
✅ Navigation stability
✅ Error page handling ("Page not found" scenarios)
✅ Checkout page accessibility verification
✅ Form elements structure maintenance
✅ Order summary verification with different basket content
✅ Navigation functionality across all pages
✅ Form validation functionality
✅ Sweet Shop "intentionally broken" application behavior handling

```


## 📈 Test Reports


### Screenshots
- Automatically generated on failures
- Saved to `cypress/screenshots/` 
- Included into .gitignore file



## 📊 Results Analysis

### Successful Test Criteria
- ✅ All tests pass (100% pass rate)
- ✅ Page loading < 4s
- ✅ No console errors


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