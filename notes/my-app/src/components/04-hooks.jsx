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
        In short, by introducing functional components to state,{" "}
        <Bem>
          they are moving away from class components, a more cumbersome and
          confusing way to develop.
        </Bem>
        <br />
        <br />
        React comes with many hooks for us to use, or we can even create our
        own, but the most commonly used hooks are <Bem>useState()</Bem> and{" "}
        <Bem>useEffect().</Bem>
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
                By following this rule, you ensure that{" "}
                <b>
                  Hooks are called in the same order each time a component
                  renders
                </b>
              </li>
              <li>
                <b>
                  This allows React to properly preserve the state of Hooks
                  between multiple
                </b>{" "}
                useState() and useEffect() <b>calls</b>
              </li>
            </ul>
          </em>
        </li>
        <li>
          Only call hooks <Bem>from React function components.</Bem> Don't call
          hooks from regular JavaScript functions
          <em>
            <ul>
              <li>
                You <b>CAN</b> call Hooks from Hooks you create
              </li>
              <li>
                By following this rule, you ensure that{" "}
                <b>
                  all stateful logic in a component is clearly visible from its
                  source code
                </b>
              </li>
            </ul>
          </em>
        </li>
      </ul>
      <hr />
      <br />
      <Bem>useState()</Bem>
      <p>
        The <Bem>useState()</Bem> Hook will{" "}
        <Bem>
          add a local piece of state to the functional component that it is
          declared in, and React will preserve
        </Bem>{" "}
        this piece of state <Bem>between renders.</Bem> The function itself will{" "}
        <Bem>
          return a pair, the current state, and a function that lets you update
          state.
        </Bem>{" "}
        The <Bem>only argument</Bem> that is passed to <Bem>useState()</Bem> is
        an <Bem>initial piece of state. </Bem> The initial piece of state is
        only used during the first render.
        <br />
        <br />
        The <Bem>function to update state</Bem> that <Bem>useState()</Bem> will
        return is <Bem>similar to this.setState</Bem> in class components,
        except it <Bem>doesn't merge state</Bem> together. Unlike this.state,{" "}
        <Bem>useState() accepts more than just an object.</Bem>
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
        The <Bem>useEffect()</Bem> hook allows us to{" "}
        <Bem>
          fire off logic after certain events happen throughout the lifecycle,
        </Bem>{" "}
        like subscriptions or data fetching, or in other words,{" "}
        <Bem>perform a side effect.</Bem> <Bem>useEffect()</Bem> accepts a
        required argument and an optional argument. The{" "}
        <Bem>required argument is a callback function,</Bem> or the logic that
        you want to perform after an event happens. The second,{" "}
        <Bem>optional argument is a dependency array</Bem> that allows us to
        conditionally fire events based off of a value.
        <br />
        <br />
        <Bem>useEffect()</Bem> allows us to perform actions{" "}
        <Bem>
          similar to componentDidMount(), componentDidUpdate(), and
          componentWillUnmount()
        </Bem>{" "}
        from our functional components, <Bem>all from the same API.</Bem> To
        achieve <Bem>functionality similar to componentWillUnmount(),</Bem> we
        must{" "}
        <Bem>include a function in the return of the callback function</Bem>{" "}
        provided to <Bem>useEffect()</Bem> that will be fired when the component
        is unmounted from the DOM.
        <br />
        <br />
        <Bem>Including or not including</Bem> the <Bem>dependency array</Bem> in
        a <Bem>useEffect()</Bem> statement is a{" "}
        <Bem>very important decision. Without it,</Bem> the{" "}
        <Bem>useEffect()</Bem> will <Bem>fire after every single render</Bem> of
        the component. <Bem>Including the dependency array</Bem> will make it so
        the <Bem>useEffect()</Bem> will{" "}
        <Bem>only fire after the first rendering</Bem> of the component. And
        finally, <Bem>including values</Bem> inside of a dependency array will
        cause the effect to{" "}
        <Bem>fire when react detects a change in value of</Bem> that variable.
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
