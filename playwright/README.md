# School Data Entry Sheet

A simple web-based data entry form for school information, built with HTML, CSS, and JavaScript. Includes a Playwright test to verify form functionality.

## Features

- Student Name input
- Age input (5-18)
- Grade selection (1st-12th)
- Favorite Subject input
- Marks input (0-100)
- Form validation
- Submit button with success alert

## Usage

### Viewing the Form

1. Open `index.html` in your web browser.

### Running the Test

1. Install dependencies: `npm install`
2. Run the Playwright test: `npx playwright test tests/demo.js`

## Troubleshooting

- If the test fails, ensure Playwright browsers are installed: `npx playwright install`
- The form uses local file access, so it should work without a server.
- For production use, consider adding a backend to handle form submissions.