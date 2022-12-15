import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import Bem from "./reused-components/Bem";
import MyContainer from "./reused-components/MyContainer";

export default function Props() {
  /* ~~~~~~~ Your code goes here ~~~~~~~~~ */

  /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
  const propsExample = `  function Child(props) {
    const text = props.string
    return <p>{text}</p>
  }
  
  function Parent() {
    return <Child string="hello" />
  }`;

  const colLeft = (
    <div>
      <Bem>What are props?</Bem>
      <p>
        Similar to state,{" "}
        <Bem>props are represented as a simple JavaScript objects.</Bem> This
        object is only{" "}
        <Bem>defined when React sees and renders a user-created component,</Bem>{" "}
        and this object is defined as the <Bem>props</Bem> parameter in a
        functional component, and the <Bem>this.props</Bem> method in a class
        component.
      </p>
      <Bem>
        Props are read only. A react component should NEVER try to modify its
        own props. React has a single strict rule:
      </Bem>
      <p>
        "All React components must act like pure functions with respect to their
        props."{" "}
        <em>
          &mdash;{" "}
          <a href="https://reactjs.org/docs/components-and-props.html">
            ReactJs.org
          </a>
        </em>
      </p>

      <hr />
      <br />

      <Bem>Example of Props:</Bem>
      <br />
      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {propsExample}
      </SyntaxHighlighter>
      <p>
        In this example we are creating two{" "}
        <Bem>functional components, one called Child</Bem>{" "}
        <Bem>that will accept a prop in its parameters,</Bem> and render the
        value of the string key from the props object in a <Bem>&lt;p&gt;</Bem>{" "}
        element. The second component that we are rendering is a{" "}
        <Bem>component called Parent</Bem> that will{" "}
        <Bem>render the Child component,</Bem> and{" "}
        <Bem>pass in a value through an attributer</Bem> with the name of
        string.
      </p>
    </div>
  );

  const colRight = (
    <div>
      <Bem>Activity</Bem>
      <p>Take a few minutes to work through this problem. Your task is to:</p>
      <ul>
        <li>
          Locate the file <Bem>05-props.jsx</Bem>
        </li>
        <li>
          In the top level component, <Bem>function Props(),</Bem> create{" "}
          <Bem>two</Bem> new functional components in the designated area the
          first will:
          <em>
            <ul>
              <li>
                <b>Render a div holding two things:</b> a button that will{" "}
                <b>increment state by 1</b>, and a button that will{" "}
                <b>decrement state by 1</b>
              </li>
            </ul>
          </em>
        </li>
        <li>
          The second component will:
          <em>
            <ul>
              <li>
                <b>Render a &lt;div&gt;</b> that will access the state that your
                button is changing
              </li>
            </ul>
          </em>
        </li>
        <li>
          You will have to <Bem>pass state through props</Bem> to your two
          components
        </li>
        <li>
          Finally, locate the constant variable, <Bem>colRight,</Bem> and at the
          end of the <Bem>&lt;div&gt;</Bem> element, render your components.
        </li>
      </ul>
      <hr />
      <br />
      {/* ~~~~~~~ Render your components here ~~~~~~~~~ */}

      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
    </div>
  );

  return (
    <MyContainer headerText="Props" colLeft={colLeft} colRight={colRight} />
  );
}
