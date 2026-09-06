# Calculator App

A beginner web development project built to practice HTML, CSS, JavaScript, DOM manipulation, event handling, and basic calculator logic.

## About

This project is a simple calculator web application inspired by the Calculator challenge from the App Ideas Collection.

The main goal of this project is to practice building an interactive web application using vanilla HTML, CSS, and JavaScript without relying on external libraries.

## Features

- Basic arithmetic operations:
  - Addition (+)
  - Subtraction (-)
  - Division (/)
- Number input from 0 to 9
- Maximum 8-digit input
- Clear (C) button
- All Clear (AC) button
- Equal (=) button
- Calculation using previous results
- Chained calculations
- Error handling for results exceeding 8 digits
- Prevents further input after an error until the calculator is cleared
- Division by zero error handling
- No `eval()` used

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Learning Goals

Through this project, I am practicing:

- HTML page structure
- CSS styling
- CSS Grid
- JavaScript DOM manipulation
- `querySelector()`
- `querySelectorAll()`
- Event listeners
- Event objects
- `classList.contains()`
- Conditional statements
- Loops
- Variables and application state
- Type conversion using `Number()`
- String manipulation
- Basic arithmetic logic
- Error handling
- Building interactive web applications with vanilla JavaScript

## Project Structure

```text
calculator-app/
├── index.html
├── style.css
├── script.js
└── README.md
```

## File Description

### `index.html`

Contains the structure of the calculator interface, including the display and calculator buttons.

### `style.css`

Contains the calculator layout and visual styling using CSS.

### `script.js`

Contains the calculator logic, event handling, input validation, arithmetic operations, state management, and error handling.

### `README.md`

Contains the project documentation, features, technologies, and learning goals.

## Project Status

🟢 Core calculator functionality is complete.

The current version implements the main calculator requirements using vanilla JavaScript.

### Future Improvements

- Positive/negative number toggle (+/-)
- Decimal number support
- Maximum 3 decimal places
- Improved UI/UX
- Responsive design
- Additional visual feedback for calculator states

## What I Learned

This project helped me understand how JavaScript interacts with HTML elements and responds to user actions.

One of the main concepts practiced in this project is application state management. The calculator stores the first number, selected operator, and second number before performing a calculation.

I also practiced handling different button actions using event listeners, conditional statements, and DOM manipulation.

The project helped me understand that building a small application is not only about writing code, but also about thinking through different user interactions and edge cases.

## Reference

This project was inspired by the Calculator challenge from the App Ideas Collection.

## Author

**Kay Hentihu**

GitHub: [KayHentihu](https://github.com/KayHentihu)
