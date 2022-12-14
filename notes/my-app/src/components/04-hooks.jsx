import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import MyContainer from "./reused-components/MyContainer";
import Bem from "./reused-components/Bem";

export default function Hooks() {
  const useStateExample = ` import React from "react"
  
  function Example() {
    const [state, setState] = React.useState("Hello World")

    return <p>{state}</p>
  }`;

  const useEffectExample = `  import React from "react"
  
  function Example() {
    React.useEffect(() => {
      console.log("Mounted")

      return () => console.log("Unmounted")
    })

    return <p>When mounted, I will log "Mounted" to the console, and when unmounted, I will log "Unmounted".</p>
  }`;

  const colLeft = (
    <div>
      <Bem>What is a hook?</Bem>
      <p>
        "Hooks are functions that let you "hook into" React state and lifecycle
        features from function components. Hooks don't work inside classes
        &mdash; they let you use React without classes."{" "}
        <em>
          &mdash;{" "}
          <a href="https://reactjs.org/docs/components-and-props.html">
            ReactJs.org
          </a>
        </em>
        <br />
        <br />
        There are many reasons as to <Bem>why</Bem> the React team created
        hooks, which can be{" "}
        <a href="https://reactjs.org/docs/hooks-intro.html#motivation">
          found here.
        </a>{" "}
        In short, by introducing functional components to state, they are moving
        away from class components, a more cumbersome and confusing way to
        develop.
        <br />
        <br />
        React comes with many hooks for us to use, or we can even create our
        own, but the most commonly used hooks are <Bem>useState()</Bem> and{" "}
        <Bem>useEffect.()</Bem>
      </p>

      <hr />
      <br />

      <Bem>Some rules on hooks:</Bem>
      <ul>
        <li>
          Only call hooks <Bem>at the top level.</Bem> Don't call hooks inside
          loops, conditions, or nested functions
          <em>
            <ul>
              <li>
                By following this rule, you ensure that Hooks are called int he
                same order each time a component renders
              </li>
              <li>
                This allows React to properly preserve the state of Hooks
                between multiple useState() and useEffect() calls
              </li>
            </ul>
          </em>
        </li>
        <li>
          Only call hooks <Bem>from React function components.</Bem> Don't call
          hooks from regular JavaScript functions
          <em>
            <ul>
              <li>You CAN call Hooks from Hooks you create</li>
              <li>
                By following this rule, you ensure that all stateful logic in a
                component is clearly visible from its source code
              </li>
            </ul>
          </em>
        </li>
      </ul>
      <hr />
      <br />
      <Bem>useState()</Bem>
      <p>
        The useState() Hook will add a local piece of state to the functional
        component that it is declared in, and React will preserve this piece of
        state between renders. The function itself will return a pair, the
        current state, and a function that lets you update state. The only
        argument that is passed to useState() is an initial piece of state. The
        initial piece of state is only used during the first render.
        <br />
        <br />
        The function to update state that useState() will return is similar to
        this.setState in class components, except it doesn't merge state
        together. Unlike this.state, useState() accepts more than just an
        object.
      </p>
      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {useStateExample}
      </SyntaxHighlighter>
    </div>
  );
  const colRight = (
    <div>
      <Bem>useEffect()</Bem>
      <p>
        The useEffect() hook allows us to fire off logic after certain events
        happen throughout the lifecycle like subscriptions or data fetching, or
        in other words, perform a side effect. useEffect accepts a required
        argument and an optional argument. The required argument is a callback
        function, or the logic that you want to perform after an event happens.
        The second, optional argument is a dependency array that allows us to
        conditionally fire events based off of a value.
        <br />
        <br />
        useEffect() allows us to perform actions similar to componentDidMount(),
        componentDidUpdate(), and componentWillUnmount() from our functional
        components. To achieve functionality similar to componentWillUnmount(),
        we must include a function in the return of the callback function
        provided to useEffect() that will be fired when the component is
        unmounted from the DOM.
        <br />
        <br />
        Including or not including the dependency array in a useEffect()
        statement is a very important decision. Without it, the useEffect() will
        fire after every single render of the component. Including the
        dependency array will make it so the useEffect() will only fire after
        the first rendering of the component. And finally, including values
        inside of a dependency array will cause the effect to fire when react
        detects a change in value of that variable.
      </p>
      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {useEffectExample}
      </SyntaxHighlighter>
    </div>
  );

  return (
    <MyContainer headerText="Hooks" colLeft={colLeft} colRight={colRight} />
  );
}
