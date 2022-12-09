import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState } from "react";

import Bem from "./reused-components/Bem";
import MyContainer from "./reused-components/MyContainer";

export default function FunctionalComponents() {
  const [classMountState, setClassMountState] = useState(false);

  const classComponentString = `class ClassComponent extends React.Component {
    render() {
      return <p>Class inspect me!</p>;
    }
  }`;
  const funcComponentString = `function FuncComponent() {
    return <p>Function inspect me!</p>;
  }`;

  const mountExampleString = `class ClassMountExample extends React.Component {
    this.state = { string: "Hello World" };
  
    componentDidMount() {
      console.log(this.state.string);
    }
  
    componentWillUnmount() {
      console.log("I am unmounted");
    }
  
    render() {
      return <p>I will console log 'Hello World' when rendered, and 'I am unmounted' when destroyed!</p>;
    }
  }`;

  class ClassComponent extends React.Component {
    render() {
      return <p>Class inspect me!</p>;
    }
  }

  function FuncComponent() {
    return <p>Function inspect me!</p>;
  }

  class ClassMountExample extends React.Component {
    state = { string: "Hello World" };

    componentDidMount() {
      console.log(this.state.string);
    }

    componentWillUnmount() {
      console.log("I am unmounted");
    }

    render() {
      return (
        <p>
          I will console log 'Hello World' when rendered, and 'I am unmounted'
          when destroyed!
        </p>
      );
    }
  }

  const colLeft = (
    <div>
      <Bem>What is a component?</Bem>
      <p>
        "Components are independent and reusable bits of code. They serve the
        same purpose as JavaScript Functions, but work in isolation and return
        HTML."{" "}
        <em>
          &mdash;{" "}
          <a
            href="https://www.w3schools.com/react/react_components.asp"
            target="_blank"
          >
            W3 Schools
          </a>
        </em>
      </p>
      <Bem>Key Concepts:</Bem>
      <ul>
        <li>Reusable</li>
        <li>Work in isolation</li>
        <li>Return HTML</li>
      </ul>
      <Bem>Some Component Rules:</Bem>
      <ul>
        <li>
          Components{" "}
          <Bem>have to return valid React Elements (including HTML)</Bem>
        </li>
        <li>
          Components can{" "}
          <Bem>only return one element (that element can have children)</Bem>
        </li>
      </ul>

      <hr />
      <br />

      <Bem>Class Components:</Bem>

      <br />

      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {classComponentString}
      </SyntaxHighlighter>

      <Bem>Output:</Bem>
      <ClassComponent />

      <br />

      <Bem>Functional Components:</Bem>

      <br />

      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {funcComponentString}
      </SyntaxHighlighter>

      <Bem>Output:</Bem>
      <FuncComponent />
    </div>
  );

  const colRight = (
    <div>
      <Bem>So what is the difference?</Bem>
      <ul>
        <li>Functional Components require less code</li>
        <li>
          Class Components extend from the <Bem>React.Component</Bem> module,
          functions are built from nothing
        </li>
        <li>Functional Components are stateless</li>
        <li>
          Functional Components don't have access to <Bem>setState()</Bem> and{" "}
          <Bem>lifecycle methods</Bem> (lifecycle methods are extended from{" "}
          <Bem>React.Component</Bem>)
          <ul>
            <em>
              <li>
                Lifecycle methods include; <b>render()</b>, <b>constructor()</b>
                , <b>componentDidMount()</b>, <b>componentWillUnmount()</b>,
                etc.
              </li>
              <li>
                <b>React 16.8</b> introduced us to <b>Hooks</b>, which grant us
                a way around these caveats
              </li>
            </em>
          </ul>
        </li>
      </ul>

      <hr />
      <br />

      <Bem>Class Component Lifecycle Methods:</Bem>

      <br />

      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {mountExampleString}
      </SyntaxHighlighter>

      <button onClick={() => setClassMountState(!classMountState)}>
        {classMountState ? "Unmount Component" : "Mount Component"}
      </button>

      <br />
      <br />

      {classMountState && (
        <>
          <Bem>Output:</Bem>
          <ClassMountExample />
        </>
      )}
    </div>
  );

  return (
    <MyContainer
      headerText="Functional vs Class Components"
      colLeft={colLeft}
      colRight={colRight}
    />
  );
}
