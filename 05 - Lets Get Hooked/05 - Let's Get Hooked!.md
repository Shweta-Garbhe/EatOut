# Assignment 05 - Let's get Hooked!

## 1: What is the difference between `Named export`, `Default export`, and `* as export`?

- There are two primary ways to export values with JavaScript: default exports and named exports. But you can use one or both of them in the same file.
- A file can have not more than one default export, but it can have as many named exports as you want.

**_`Named export`:_**
With named exports, one can have multiple named exports per file. Then import the specific exports they want surrounded in braces. The name of imported module has to be the same as the name of the exported module.

```
> export function Form() {} // named export
```

and the component is imported from Form.js file like: here we must use `{}`.

```
> // ex. importing a single named export
> import { Button } from './Form'; // Named import

> // ex. importing multiple named exports
> import { Button, Dropdown } from "./Form";

> // ex. giving a named import a different name by using "as":
> import { Button as btn } from "./Form";
```

**_`Default export`:_**
One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.
In `Default export`, the component is exported from Form.js file like:

```
> const Form = () => {}
> export default Form;
```

and the component is imported from Form.js file like: here we must omit `{}` in Form.

```
> import Form from "./Form";
```

**_`* as export`_**:
It is used to import the whole module as a component and access the components inside the module.
In `* as export`, the component is exported from MyComponent.js file like:

```
> export const Button = () => {}
> export const CheckBox = () => {}
> export const RadioButton = () => {}
```

and the component is imported from Form.js file like:

```
> import * as FormComponents from "./Form";
```

Now we can use them in JSX as:

```
> <FormComponents.Button />
> <FormComponents.CheckBox />
> <FormComponents.RadioButton />
```

We can use `Named export` and `Default export` together. So you should export like:

```
> export const Button = () => {} // named export
> const Form = () => {}
> export default Form; // default export
```

and import like:

```
> import Form, {Button} from "./Form";
```

## 2: What is the importance of `config.js` file?

- `config.js` files are essentially editable text files that contain information required all over your application.
- we can add config.js file is to use static data which needs to be used all over the application.
- Suppose we want our BASE URL to configure for local, test and prod environment then we can create a config file with different values based on the environment we are using so our main application code will be untouched, only the base url will be changed based on environment we are working upon.

  - we can create "config.js" under project root directory.
  - You can add static data in config.js file.

  ```
  export const configData =  {
    BASE_URL: "https://your-domain.com/app-url/"
  }
  ```

  - Now suppose you want to use the configData in "App.js" file under the src folder of project root directory.

  ```
  import { configData } from "../Config";
  const verify_link = configData.BASE_URL + "any_custom_link";
  ```

- You can import and use the 'configData' wherever required all over your application the same way.

## 3: What are `React Hooks`?

- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
- It starts with 'use' always. Even if you want to create custom hook you have to start it's name with 'use' keyword.
- React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.
- Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
- Hooks can be stateful and can manage side-effects.

### React provides a bunch of standard in-built hooks:

- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.
- useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- useMemo: It returns a memoized value that helps in performance optimizations.
- useRef: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue: Helps to display a label in React DevTools for custom hooks.

## 4: Why do we need `useState Hook`?

- `useState hook` is used to maintain the state in our React application.
- We call it inside a function component to add some local state to it.
- React will preserve this state between re-renders.
- useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else.
- It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.
- The only argument to useState is the initial state.
- The useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

#### Syntax for useState hook

```
> const [state, setState] = useState(initialstate);

import React, { useState } from "react";

function ExampleWithManyStates() {

  // Declare multiple state variables
  const [counter, setCounter] = useState(0);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  //

}
```
