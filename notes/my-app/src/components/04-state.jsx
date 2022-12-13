import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useEffect } from "react";

// import Bem from "./reused-components/Bem";
import MyContainer from "./reused-components/MyContainer";
import Bem from "./reused-components/Bem";

export default function State() {
  /* ~~~~~~~ Your code goes here ~~~~~~~~~ */

  /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
  const stateExample = `import { useState } from "react"

function State() {
  const [myState, setMyState] = useState("Hello World")

  return <p>{myState}</p>
}
  `;

  const directUpdateExample = `state.string = "hello world" // incorrect`;

  const correctUpdateExample = `setMyState({...myState, string = "hello world"}) // correct`;

  const setStateFunc = `onChange = {(event) => {
  const val = event.target.value
  setMyState((prev) => prev + val)
}}`;

  const colLeft = (
    <div>
      <Bem>What is state?</Bem>
      <p>
        In the simplest terms, state is a piece of data, a simple JavaScript
        object, that is managed by a component.
        <br />
        <br />
        In a functional component, state is initialized using the{" "}
        <Bem>useState()</Bem> hook that is imported from <Bem>react.</Bem> You
        then use the <Bem>Destructuring Assignment</Bem> syntax to declare your{" "}
        <Bem>state getter</Bem> and <Bem>setter</Bem>, and declare a{" "}
        <Bem>default state</Bem> by including it as an <Bem>argument</Bem> when
        you <Bem>call the hook.</Bem>
      </p>
      <br />
      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {stateExample}
      </SyntaxHighlighter>

      <hr />
      <br />

      <Bem>Some rules about state:</Bem>
      <ul>
        <li>
          State is immutable
          <em>
            <ul>
              <li>
                Do not update state directly or directly reference the state
                variable in a set action:
                <SyntaxHighlighter
                  className="codeHighlight"
                  language="jsx"
                  style={vscDarkPlus}
                >
                  {directUpdateExample}
                </SyntaxHighlighter>
              </li>
              <li>
                Instead, use the getters and setters and spread out the state
                object if you need to reference it in your call:
                <SyntaxHighlighter
                  className="codeHighlight"
                  language="jsx"
                  style={vscDarkPlus}
                >
                  {correctUpdateExample}
                </SyntaxHighlighter>
              </li>
            </ul>
          </em>
        </li>
        <li>
          Sometimes state updates may be async
          <em>
            <ul>
              <li>
                Because another piece of state may be updating at the same time
                as the update you are trying to make, you CANNOT rely on that
                other piece of state in your statement
              </li>
              <li>
                Instead, use a function in your set state call that will
                reference the previous version of state as an argument:
                <SyntaxHighlighter
                  className="codeHighlight"
                  language="jsx"
                  style={vscDarkPlus}
                >
                  {setStateFunc}
                </SyntaxHighlighter>
              </li>
            </ul>
          </em>
        </li>
        <li>
          <Bem>(Class Components)</Bem> State updates are merged
        </li>
        <em>
          <ul>
            <li>
              In a class component, you may have many different state variables
              in your <b>this.state</b> object. The <b>setState()</b> method
              that extends from <b>React.Component</b> will shallow merge any
              state updates with the existing state object rather than
              overwriting it
            </li>
          </ul>
        </em>
      </ul>
    </div>
  );

  const colRight = (
    <div>
      <Bem>Why do we use state?</Bem>
      <p>
        In React, the only way to update a component, or change what the
        component is displaying on the screen, is with the{" "}
        <Bem>React.render()</Bem> method.
        <br />
        <br />
        However, <Bem>React.render() is a manual call</Bem> and we want our web
        pages to be <Bem>truly responsive without manual input.</Bem>
        This is why we introduce state. When react detects a correct{" "}
        <Bem>change in state,</Bem> it will trigger a <Bem>rerender</Bem> for
        that component.
      </p>

      <hr />
      <br />
      <Bem>Activity</Bem>
      <p>
        Take a few minutes to practice everything we have learned so far (jsx,
        components, and state). Your task is to:
      </p>
      <ul>
        <li>
          Locate the file <Bem>00-state.jsx</Bem>
        </li>
        <li>
          In the top level component, <Bem>function State(),</Bem> create a new
          functional component in the designated area that will:
          <em>
            <ul>
              <li>
                Use the <b>useState()</b> hook to initialize a new piece of
                state with the initial state of the integer <b>0</b>
              </li>
              <li>
                <b>Render two buttons</b>, a button that will{" "}
                <b>increment state by 1</b>, a button that will{" "}
                <b>decrement state by 1</b>, a <b>paragraph element</b> that{" "}
                <b>renders the state of your new component</b>
              </li>
            </ul>
          </em>
        </li>
        <li>
          Finally, locate the constant variable <Bem>colRight</Bem> and render
          your component as a self closing element in the space provided
        </li>
      </ul>
      {/* ~~~~~~~ Render your component here ~~~~~~~~~ */}

      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
    </div>
  );

  return (
    <MyContainer headerText="State" colLeft={colLeft} colRight={colRight} />
  );
}
