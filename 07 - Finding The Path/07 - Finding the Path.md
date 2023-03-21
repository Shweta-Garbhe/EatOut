# Assignment 07 - Finding the Path

## 1: What are various ways to `add images` into our App? Explain with `code examples`.

1.1. Using the `full URL of the image` for the web (CDN) or any public images.
Example :

    ```
    > <img src="https://reactjs.org/logo-og.png" alt="React Image" />
    ```

1.2. Adding the image into the project
`Drag your image into your project` and `import it` into the desired component

    ```
    > import reactLogo from "./reactLogo.png";
    > export default function App() {
    > return <img src={reactLogo} alt="react logo" />
    > }
    ```

1.3. The correct way to structure images in your project is to add them in an `images`/ `public` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.

    ```
    > import reactLogo from "../../assets/images/reactLogo.png";
    > export default function App() {
    > return <img src={reactLogo} alt="react logo" />
    > }
    ```

## 2: What would happen if we do `console.log(useState())`?

- useState lets you use local state within a function component. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
- If we do `console.log(useState())`, we get an array `[undefined, function]` where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.

## 3: How will `useEffect` behave if we `don't add` a `dependency array`?

Syntax of `useEffect` is:

```
useEffect(() => {}, []);
```

Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```

Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```

Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.

```
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```

## 4: What is `SPA`?

- `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.
- single-page application (SPA) is a webpage that dynamically interacts with the web browser by rewriting the current web page with data from the webserver. As a result, the webpage does not reload during its execution and instead operates in a browser

## 5: What is the difference between `Client Side Routing` and `Server Side Routing`?

- In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one. With server-side routing, a user clicks a link that requests a new page or new data from the server (another computer). And then new data or document is served to the user.

- In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`.
