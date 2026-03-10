# Task Tracker (React + SCSS)

A simple frontend project demonstrating a task tracker app built with React and SCSS, with CSS source maps enabled. The app allows users to add task and delete them.

---

## Setup and Run Instructions

1. Clone the repository:

    ```code 
    git clone https://github.com/MarPostovik/task-tracker.git
    cd task-tracker
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Run development server:

    ```
    npm start
    ```

- Opens http://localhost:3000

4. Build production version:
```code
    npm run build
```

## CSS

- All styles are written in SCSS files under src/styles/:

    src/styles/
    ├── _variables.scss
    ├── _layout.scss
    ├── _components.scss
    └── main.scss

- main.scss imports all other SCSS files.
- When running or building the app, CRA compiles SCSS to CSS, bundles it, and generates source maps.
- In the browser, the compiled CSS is applied, but source maps allow devtools to show the original SCSS files and line numbers.

## Generated CSS and Source Maps

- After production build (npm run build), generated files are located in:

    build/static/css/

Example output:

    main.<hash>.css       // compiled CSS used by the browser
    main.<hash>.css.map   // CSS source map 
