# Test Suite for Creative Fabrica Website

This project is a Playwright test suite for one of the pages on the **Creative Fabrica** website. The test suite covers main user interactions, including searching, downloading, and verifying page elements.

## Prerequisites
Before running the tests, make sure you have the following installed:

1. **Node.js** (Recommended: `>=18.17.0`)
  - You can download it from [Node.js official website](https://nodejs.org/)
  - Check your installed version: `node -v`

2. **npm** (Node Package Manager)
  - Comes with Node.js but ensure it's updated: `npm install -g npm`

3. **Java Runtime Environment (JRE)** (Required for Allure reports)
  - Download from [Java.com](https://www.java.com/)
  - Verify installation: `java -version`

4. **Playwright and dependencies**
  - Install dependencies: `npm install`
  - Install Playwright: `npx playwright install`

## Running Tests
You can execute tests in both headless and headed modes.

### Headless Mode (default, runs tests without UI)
```sh
npx playwright test
```

### Headful Mode (runs tests with UI for debugging)
```sh
npx playwright test --headed
```

### Running a Specific Test
```sh
npx playwright test tests.spec.ts --grep "test name"
```

## Generating and Viewing Allure Reports
To generate and open an **Allure report** after running the tests:

1. Run tests and generate results:
```sh
npx playwright test
```

2. Generate the Allure report:
```sh
npx allure generate allure-results --clean -o allure-report
```

3. Open the Allure report in a browser:
```sh
npx allure open allure-report
```

## Additional Notes
- If you encounter issues with Allure reports, ensure Java is installed and the `allure` CLI is correctly configured.
- Playwright’s built-in report is available after test execution at:
  ```sh
  npx playwright show-report
  ```

## Covered Test Cases

### This test suite includes the following scenarios:

- User can click the Download button and be redirected to the cart.

- User can see photos and reviews of a product.

- User can activate a free trial.

- User can use search functionality.

- User can open login modal.

## Additional Scenarios (Not Covered)

### The following test cases were identified but were not covered due to assessment requirements:

- Language selection functionality.

- Create functionality.

- Home page validation.

- Correct selectors on the page:

- Stars rating

- Validate a description section of a position

- Add to favorite button works correctly.

- Write review feature is locked for guests.

- Popup with download button appears after scrolling.

