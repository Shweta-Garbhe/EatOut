# Assignment 09 - Optimizing Our App

### 1: When and why do we need `lazy()`?

- lazy() allows developers to easily create components with dynamic imports and render them as normal components. When the component is rendered, it will automatically load the bundle that contains the rendered component. You need to provide a single input parameter to call React. lazy().
- It accepts a function as an input parameter, and that function should return a promise after loading the component using import(). Finally, the returned promise from React.lazy() will give you a module with a default export containing the React component.
- Example:

```
> // Without React.lazy()
> import AboutComponent from './AboutComponent ';

> // With React.lazy()
> const AboutComponent = React.lazy(() => import('./AboutComponent '));

> const HomeComponent = () => (
>   <div><AboutComponent /></div>
> )
```

#### Advantages of Lazy Loading

- Reduces initial loading time by reducing the bundle size.
- Reduces browser workload.
- Improves application performance in low bandwidth situations.
- Improves user experience at initial loading.
- Optimizes resource usage.

#### Disadvantages of Lazy Loading

- Not suitable for small-scale applications.
- Placeholders can slow down quick scrolling.
- Requires additional communication with the server to fetch resources.
- Can affect SEO and ranking.

#### When to use Lazy loading?

- When we want browser to load react components lazily through code splitting without help from any additional libraries.
- When we develop a giant application and we can not let bundler create a single file to bundle whole our application code. We can use Lazy loading as it will create different bundle file for the components we chose to lazy load as and when required. This is how we can chose to render critical user interfaces content which must be visible to user at first glance and chose sub components/non-critical content to load if user wishes to visit them. This is how we can improve our application performace and browser load time at initial rendering.
  Example:
  Amazon uses many features in single application. It loads shopping content at first load. If user wishes to visit Amazon fresh store for buying daily essentials like fruits, veggies etc. then it loads Amazon fresh view.
  In such cases, we dont need to load everything at first glance and increase browser load time unnecessary. We can rather load amazon fresh content if user wishes to visit it else not at all.
  This is how we can achieve Lazy loading.

### 2: What is `Suspense`?

When we use lazy loading, components are rendered as we navigate. So, we need to have a placeholder for those components until they are loaded. As a solution, React.Suspense was introduced, and it acts as a wrapper for the lazy components.

You can wrap a single lazy component, multiple lazy components, or multiple lazy components with different hierarchy levels with React.Suspense. In addition, it accepts a prop named `fallback` as the placeholder, and you can pass a component or an element for that.
In short, <Suspense> lets you display a fallback until its children have finished loading.

For example, you can pass the waiting or loading message as the `fallback prop`, and it will be displayed until the wrapped lazy component is rendered.

```
> import React, { Suspense } from "react";
> const AboutComponent = React.lazy(() => import('./AboutComponent'));

> const HomeComponent = () => (
>    <div>
>       <Suspense fallback = { <div> Loading... </div> }>
>            <AboutComponent />
>       </Suspense>
>    </div>
> );
```

### 3: Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?

The core of this error is just having a component suspend without a `suspense boundary`:

```
> import { Suspense } from "react";

> const SuspenseTrigger = () => {
>   throw new Promise(() => {});
> };

> export default function App() {
>   return (
>     <div className="App">
>      <h1>Suspense example</h1>
>      {/* <Suspense fallback={<div>loading...</div>}> */}
>      <SuspenseTrigger />
>      {/* </Suspense> */}
>    </div>
>   );
> }

```

The sandbox seems to give slightly odd behaviour on reloading, so you'll need to do these steps in order to show the issue:

- Open the sandbox - this starts with no suspense happening (the suspending component is commented out), and should just display "Suspense Example"

- In App.js, uncomment the <SuspenseTrigger /> line. This suspends on render but there is no suspense boundary so we see the misleading error. This replicates what I'm seeing when Relay suspends to wait for a query result. The error should be thrpwn as we are expecting in question.

- The simplest fix is to add a suspense boundary, rather than using startTransition as described in the error message. To check this, uncomment the remaining two commented lines in App.js. This gives a fallback component as expected, and resolves the error without requiring startTransition

```
  Suspense Example
  Loading...
```

- Adding startTransition in cases where it makes sense seems to be a nice-to-have addition after a suspense boundary is in place, in that it will delay the transition until the suspending component is ready. However
  - This doesn't seem to be the primary problem - that's the lack of suspense boundary.
  - The suspense boundary is much easier to add and more general, and
  - It seems like it may not always be possible to use a transition.
  - For example where the problem occurs on first load as in the minimal example, or in my react-router case where we can benefit from using startTransition in some places, but it's difficult to make sure any possible navigation route is done as a transition, and missing any out will lead to an error unless we also add a suspense boundary.

### 4: `Advantages and Disadvantages` of using this `code splitting pattern`?

#### Advantages of Lazy Loading

- Reduces initial loading time by reducing the bundle size.
- Reduces browser workload.
- Improves application performance in low bandwidth situations.
- Improves user experience at initial loading.
- Optimizes resource usage.

#### Disadvantages of Lazy Loading

- Not suitable for small-scale applications.
- Placeholders can slow down quick scrolling.
- Requires additional communication with the server to fetch resources.
- Can affect SEO and ranking.

### 5. When do we and why do we need suspense?

- Suspense is the first feature released by the Facebook React team that takes advantage of the new concurrent rendering engine built into React 18. It allows you to build apps with more responsive UIs that use less browser resources. It also gives developers and designers a more intuitive API to work with.
- As we have seen in lazy loading concept, we render components dynamically, as and when user wishes to visit them using lazy().
- When user wants to access this non rendered component in SPA, it takes some time for browser to load it's data & UI and made it visible to user. For this time span, Suspense feature has been introduced.
- In this time, Suspense element can show any loader, spinner ,shimmer or transitions to enhance the user experience,
  Which indicated the user that the component is loading, it's in progress and this is how user does not leave your site.
  For this reason, Suspnse was introduced and used by many developers across the globe.
