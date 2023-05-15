# Assignment 10 - CSS Implementation

## 1: Explore all the ways of writing css

    - External CSS
    - Inline CSS
    - SCSS
    - Component libraries: Bootstrap, Ant Design, Material ui, Chakra, Base etc
    - Module CSS
    - Styled Components CSS
    - Utility library: Tailwind

## 2. How do we configure tailwind?

    - 1. npm install -D tailwindcss postcss
    - 2. npx tailwindcss init
    - 3. Add below code in .postcssrc file in root directory
    ```
    {
    "plugins": {
        "tailwindcss": {}
        }
    }
    ```

    - 4. Add below code in tailwind.config.js in root directory
    ```
    /** @type {import('tailwindcss').Config} */
        module.exports = {
            content: ["./src/**/*.{html,js}"],
            theme: {
                extend: {},
            },
            plugins: [],
        };

    ```

    - 5.  Add below code in index.css in root direcory css file

    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## 3. In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

    - Content: Here, we add files directory and their extension where tailwind classes will be activated for those  directory/files.

    - Theme: The theme section of tailwind.config.js file is where we define our project’sr palette, type scale, fonts, breakpoints, border radius values, and more.

    - Extend: If we like to preserve the default values for a theme option but also add new values, we can do that by adding extensions under the extend key in the theme section of your configuration file.

    - Plugins: This is used for third party library extension and also for tailwind plugins.

## 4. Why do we have .postcssrc file?

    - .posrtcssrc file is used to process the tailwind css class and converting them into pure vanilla css. This process is done by the bundler which needs configuration and the configuration comes from the .postcssrc file

## Refer Tailwind official documentation page:

https://tailwindcss.com/docs/installation
