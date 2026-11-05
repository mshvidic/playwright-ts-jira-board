# 🎯 Playwright TypeScript Jira Board Test Automation Framework

An enterprise-grade, end-to-end (E2E) UI test automation suite built with **Playwright** and **TypeScript** for testing web-based Kanban and Jira-style project management boards.

### 🚀 Key Features

* **Page Object Model (POM):** Clean, scalable architecture ensuring maintainable and reusable UI test components.

* **Cross-Browser & Parallel Execution:** Out-of-the-box configuration for Chromium, Firefox, and WebKit running in parallel.

* **Rich Reporting:** Built-in HTML reports with trace viewer logs, screenshots, and video recordings of test runs.

### 🛠️ Tech Stack

* **Language:** TypeScript

* **Core Framework:** [Playwright Test](https://playwright.dev/)

* **Reporting:** Playwright HTML Reporter

* **CI/CD:** GitHub Actions

### 📦 Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher recommended)

* `npm` or `yarn`

### ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mshvidic/playwright-ts-jira-board.git
   cd playwright-ts-jira-board
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Playwright browsers:**

   ```bash
   npx playwright install --with-deps
   ```

### 🧪 Running Tests

```bash
# Run all tests headlessly across all browsers
npx playwright test

# Run tests in interactive UI Mode (Recommended for development)
npx playwright test --ui

# Run tests in headed mode (visible browser windows)
npx playwright test --headed

# Run a specific test file
npx playwright test tests/jira-board.spec.ts

# Debug step-by-step with Playwright Inspector
npx playwright test --debug
```

### 📊 Test Reports

Generate and open the HTML execution report:

```bash
npx playwright show-report
```

### 📂 Directory Structure

```text
├── tests/                  # End-to-End UI test suites
├── pages/                  # Page Object Model definitions
│   ├── BoardPage.ts        # Board interactors & locators
│   └── IssueModal.ts       # Issue creation/editing modals
├── utils/                  # Test helpers and utility functions
├── playwright.config.ts    # Global Playwright execution configuration
└── package.json
```
