# Serri QA Automation Assignment

## Overview
This project contains QA automation tests for the Serri CRM Beta application using Playwright and JavaScript.

## Modules Covered
- Login and Dashboard
- Contacts module inspection
- Contacts search and filtering

## Tech Stack
- JavaScript
- Playwright
- Node.js
- Chromium

## Project Structure
```text
serri-qa-assignment/
├── tests/
│   ├── login.spec.js
│   └── contacts.spec.js
├── .env
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

## Setup
1. Install Node.js.
2. Clone or download this repository.
3. Install dependencies:

```bash
npm install
npx playwright install chromium
```

4. Create a `.env` file in the project root:

```env
BASE_URL=https://app.beta.serri.co.in/
LOGIN_EMAIL=your_test_email
PASSWORD=your_test_password
```

## Run Tests

Run login test:

```bash
npx playwright test tests/login.spec.js --reporter=list
```

Run Contacts test:

```bash
npx playwright test tests/contacts.spec.js --reporter=list
```

Run all tests:

```bash
npx playwright test
```

## Test Observations
- Login automation passed.
- Contacts search and filtering were manually checked.
- Template creation returned `Token not authorized`.
- Campaign testing was blocked because a template could not be created.

## Security
Credentials are stored in `.env`. The `.env` file is excluded from Git using `.gitignore`.