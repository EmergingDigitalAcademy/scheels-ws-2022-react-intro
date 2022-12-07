import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState } from "react";

export default function FunctionalComponents() {
  const [classMountState, setClassMountState] = useState(false);

  const classComponentString = `class ClassComponent extends React.Component {
    render() {
      return <p>Class Hello World</p>;
    }
}`;
  const funcComponentString = `function FuncComponent () {
    return <p>Function Hello World</p>;
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
    return <p>I will console log 'Hello World' when called!</p>;
  }
}`;

  class ClassComponent extends React.Component {
    render() {
      return <p>Class Hello World</p>;
    }
  }

  function FuncComponent() {
    return <p>Function Hello World</p>;
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
      return <p>I will console log 'Hello World' when called!</p>;
    }
  }

  return (
    <div>
      <h2>Functional vs Class Components</h2>
      <p>
        <b>
          <em>What is a component?</em>
        </b>
        &nbsp; "Components are independent and reusable bits of code. They serve
        the same purpose as JavaScript Functions, but work in isolation and
        return HTML." <em>&mdash; W3 Schools</em>
      </p>

      <br />

      <div id="colWrapper">
        <div>
          <b>
            <em>Key concepts:</em>
          </b>
          <ul>
            <li>Reusable</li>
            <li>Work in isolation</li>
            <li>Return HTML</li>
          </ul>

          <br />

          <b>
            <em>Class Component:</em>
          </b>

          <br />

          <SyntaxHighlighter
            className="codeHighlight"
            language="javascript"
            style={vscDarkPlus}
          >
            {classComponentString}
          </SyntaxHighlighter>

          <b>Output:</b>
          <ClassComponent />

          <br />

          <b>
            <em>Functional Component:</em>
          </b>

          <br />

          <SyntaxHighlighter
            className="codeHighlight"
            language="javascript"
            style={vscDarkPlus}
          >
            {funcComponentString}
          </SyntaxHighlighter>

          <b>Output:</b>
          <FuncComponent />
        </div>
        <div>
          <b>
            <em>So what is the difference?</em>
          </b>
          <ul>
            <li>Functional Components require less code</li>
            <li>
              Class Components extend from the{" "}
              <b>
                <em>React.Component</em>
              </b>{" "}
              module, functions are built from nothing
            </li>
            <li>Functional Components are stateless</li>
            <li>
              Functional Components don't have access to{" "}
              <b>
                <em>setState()</em>
              </b>{" "}
              and{" "}
              <b>
                <em>lifecycle methods</em>
              </b>{" "}
              (lifecycle methods are extended from{" "}
              <b>
                <em>React.Component</em>
              </b>
              )
              <ul>
                <em>
                  <li>
                    Lifecycle methods include; <b>render()</b>,{" "}
                    <b>constructor()</b>, <b>componentDidMount()</b>,{" "}
                    <b>componentWillUnmount()</b>, etc.
                  </li>
                  <li>
                    <b>React 16.8</b> introduced us to <b>Hooks</b>, which grant
                    us a way around these caveats
                  </li>
                </em>
              </ul>
            </li>
          </ul>

          <br />

          <b>
            <em>Class Component Lifecycle Methods:</em>
          </b>

          <br />

          <SyntaxHighlighter
            className="codeHighlight"
            language="javascript"
            style={vscDarkPlus}
          >
            {mountExampleString}
          </SyntaxHighlighter>

          <button onClick={() => setClassMountState(!classMountState)}>
            Render Component
          </button>

          <br />
          <br />

          {classMountState && (
            <>
              <b>Output:</b>
              <ClassMountExample />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
