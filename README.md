# Eye Dropper API Demo

An accessible demonstration of the experimental [Eye Dropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper), allowing users to select a colour from anywhere on their screen. If the API is not supported by the browser, a fallback message with a helpful link is displayed.

## Features

- Uses the native Eye Dropper API to select on-screen colours
- Displays the selected colour visually as a swatch
- Shows the hex value of the selected colour
- Graceful fallback for unsupported browsers
- Fully keyboard-navigable and theme-aware

### Other

- Loading animation
- Theme switcher.

[View on GitPage](https://chrisnajman.github.io/eye-dropper)

## How to Use

- Click the colour picker button (or focus it using the `Tab` key)
- Select a colour from anywhere on the screen:
  - If using a mouse: click the desired colour
  - If using a keyboard: use the arrow keys to navigate and press `Enter` to confirm
- The selected colour will appear in the swatch and its hex value will be displayed

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.

The JavaScript has been split into separate modules, improving code modularity:

- `eye-dropper.js`: Contains the logic to check for API support, launch the eye dropper, handle user interaction, update the UI, and display a fallback message when unsupported.

### Other

- `loader.js`: See [Loader Git repository](https://github.com/chrisnajman/loader)
- `theme.js`: Handles theme toggling (light/dark mode) and local storage management.

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

---

## Accessibility

- Fully keyboard operable: focus the button using `Tab`, select with arrow keys, and confirm with `Enter`
- Live regions (`aria-live="polite"`) ensure screen readers announce colour changes
- `aria-describedby` used to describe button behavior and output areas
- All visual updates (swatch and hex) are announced to assistive technologies
- Visually hidden text labels enhance screen reader clarity without cluttering the UI

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).
