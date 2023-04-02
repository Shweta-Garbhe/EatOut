# Assignment 08 - Let's get Classy

## 1: How do you create `Nested Routes` react-router-dom configuration?

A: We can create a `Nested Routes` inside a react router configuration as follows:
first call createBrowserRouter for routing different pages

```
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for root path
      errorElement: <Error />, // show error component is component does not match with searched path
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```

Now we can create a nested routing for `/path` using `children` again as follows:

```
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [                   // nested routing for subchild
               {
                  path: "/child",
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```

## 2: Read about `createHashRouter`, `createMemoryRouter` from React Router docs.

- `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
  Other than that, it is functionally the same as `createBrowserRouter`.
  For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

- `createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
  For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)

## 3: What is the order of life cycle method calls in `Class Based Components`?

The order of lifecycle methods calls in `Class Based Components` is as follows:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## 4: Why do we use `componentDidMount`?

The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
We can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.

## 5: Why do we use `componentWillUnmount`? Show with example.

- `componentWillUnmount()` is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount() .
- `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
  For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.

## 6: (Research) Why do we use `super(props)` in constructor?

- `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
- super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. - Class components always need to call the base constructor with props. Moreover, ES6 classes need to call super in case they are subclasses. Thus, if you wish to use it in the constructor, you need to pass it to super ().
  In case we omit it, we can always find props available inside render function.
- The purpose of super props is to call the constructors of the parent class.
- When you pass props to the 'super()' method in the constructor, the main difference will be accessing 'this.props' inside the constructor method. you can access 'this.props' inside the constructor method of the child component.
- When you pass props to the 'super()' method in the constructor, the main difference will be accessing 'this.props' inside the constructor method. So, even if we don’t pass props to super(). React will still assign them right afterward. That’s why it works inside the render method and not in the constructor.

For more reference [Read more about Super() vs Super(props)](https://www.turing.com/kb/beginners-guide-to-super-and-super-props-in-react)

## 7: (Research) Why can't we have the `callback function` of `useEffect async`?

You cannot directly make the callback function supplied to the useEffect hook async because:

- async functions implicitly return a promise, and;
- useEffect expects its callback to either return nothing or a clean-up function.

When you attempt to make useEffect's callback async, you will see the following warning:

> // Warning: Effect callbacks are synchronous to prevent race conditions

- We cannot make useEffect() async function because React's useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.
