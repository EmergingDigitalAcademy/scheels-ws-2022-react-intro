import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

import MyContainer from "./reused-components/MyContainer";
import Bem from "./reused-components/Bem";

export default function State() {
  /* ~~~~~~~ Your code goes here ~~~~~~~~~ */

  /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
  const stateExample = `  import { useState } from "react"

  function State() {
    const [myState, setMyState] = useState({ string: "" });

    return (
      <div>
        <input
          type="text"
          value={myState.string}
          onChange={(event) => setMyState({ string: event.target.value })}
        />
        <p>{myState.string}</p>
      </div>
    );
  }`;

  const directUpdateExample = ` // incorrect
  state.string = "hello world"`;

  const correctUpdateExample = `  // correct
  setMyState({...myState, string: "hello world"})`;

  const setStateFunc = `  onChange = {(event) => {
    const val = event.target.value
    setMyState((prev) => prev + val)
  }}`;

  const colLeft = (
    <div>
      <Bem>What is state and why do we use it?</Bem>
      <p>
        In the simplest terms, state is a piece of data,{" "}
        <Bem>a simple JavaScript object, that is managed by a component.</Bem>
        <br />
        <br />
        In a functional component, state is initialized using the{" "}
        <Bem>useState()</Bem> hook that is imported from <Bem>react.</Bem> You
        then use the <Bem>Destructuring Assignment</Bem> syntax to declare your{" "}
        <Bem>state getter</Bem> and <Bem>setter</Bem>, and declare a{" "}
        <Bem>default state</Bem> by including it as an <Bem>argument</Bem> when
        you <Bem>call the hook.</Bem>
        <br />
        <br />
        In React, the only way to update a component, or change what the
        component is displaying on the screen, is with the{" "}
        <Bem>React.render()</Bem> method.
        <br />
        <br />
        However, <Bem>React.render() is a manual call</Bem> and we want our web
        pages to be <Bem>truly responsive without manual input.</Bem>
        This is why we introduce state. When react detects a{" "}
        <Bem>correct change in state,</Bem> it will trigger a{" "}
        <Bem>rerender</Bem> for that component.
      </p>
      <hr />
      <br />
      <Bem>Example of State:</Bem>
      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {stateExample}
      </SyntaxHighlighter>
      <p>
        We are importing the <Bem>useState()</Bem> hook through{" "}
        <Bem>Object Destructuring</Bem> and are creating a new functional
        component. This component will use the useState hook and{" "}
        <Bem>
          Destructuring Assignment syntax to create a piece of state inside the
          functional component
        </Bem>{" "}
        with the <Bem>initial state declared as in argument in useState().</Bem>{" "}
        The initial state is an object with one key and value, string and
        "hello".
        <br />
        <br />
        This component then returns a <Bem>&lt;div&gt;</Bem> element holding an{" "}
        <Bem>&lt;input&gt;</Bem> element with 3 attributes, an input declaration
        type, a{" "}
        <Bem>
          value attribute that accesses the piece of state created using the
          getter,
        </Bem>{" "}
        and an attribute that{" "}
        <Bem>detects changes within the rendered input.</Bem> When a change is
        detected, the input fires a{" "}
        <Bem>Callback function that calls the state setter</Bem> and sets state
        to a new object with the copying the original object state structure,
        but <Bem>accesses the event value for the value in the key.</Bem>
        <br />
        <br />
        The <Bem>&lt;div&gt;</Bem> also renders a <Bem>&lt;p&gt;</Bem> element
        that accesses the string value on the state object created.
      </p>
    </div>
  );

  const colRight = (
    <div>
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

      <hr />
      <br />
      <Bem>Activity</Bem>
      <p>
        Take a few minutes to practice everything we have learned so far (jsx,
        components, and state). Your task is to:
      </p>
      <ul>
        <li>
          Locate the file <Bem>04-state.jsx</Bem>
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
                <b>Render a div holding three things: two buttons</b>, a button
                that will <b>increment state by 1</b>, a button that will{" "}
                <b>decrement state by 1</b>, a <b>&lt;p&gt;</b> element that{" "}
                <b>accesses the state of your new component</b>
              </li>
            </ul>
          </em>
        </li>
        <li>
          Finally, locate the constant variable, <Bem>colRight,</Bem> and at the
          end of the <Bem>&lt;div&gt;</Bem> element, render your component as a
          self closing element in the space provided
        </li>
      </ul>
      <hr />
      <br />
      {/* ~~~~~~~ Render your component here ~~~~~~~~~ */}

      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
    </div>
  );

  return (
    <MyContainer headerText="State" colLeft={colLeft} colRight={colRight} />
  );
}
