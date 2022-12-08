import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState } from "react";

export default function FunctionalComponents() {
  const [classMountState, setClassMountState] = useState(false);

  const Emb = ({ text }) => {
    return (
      <b>
        <em>{text}</em>
      </b>
    );
  };

  const classComponentString = `class ClassComponent extends React.Component {
    render() {
      return "<p>Class inspect me!</p>";
    }
}`;
  const funcComponentString = `function FuncComponent () {
    return "<p>Function inspect me!</p>";
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
    return "<p>I will console log 'Hello World' when rendered, and 'I am unmounted' when destroyed!</p>";
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

  return (
    <div className="container">
      <h2>Functional vs Class Components</h2>
      <p>
        <Emb text="What is a component?" />
        &nbsp; "Components are independent and reusable bits of code. They serve
        the same purpose as JavaScript Functions, but work in isolation and
        return HTML." <em>&mdash; W3 Schools</em>
      </p>

      <hr />
      <br />

      <div id="colWrapper">
        <div>
          <Emb text="Key Concepts:" />
          <ul>
            <li>Reusable</li>
            <li>Work in isolation</li>
            <li>Return HTML</li>
          </ul>

          <br />

          <Emb text="Class Component:" />

          <br />

          <SyntaxHighlighter
            className="codeHighlight"
            language="javascript"
            style={vscDarkPlus}
          >
            {classComponentString}
          </SyntaxHighlighter>

          <Emb text="Output:" />
          <ClassComponent />

          <br />

          <Emb text="Functional Component:" />

          <br />

          <SyntaxHighlighter
            className="codeHighlight"
            language="javascript"
            style={vscDarkPlus}
          >
            {funcComponentString}
          </SyntaxHighlighter>

          <Emb text="Output:" />
          <FuncComponent />
        </div>

        <hr />

        <div>
          <Emb text="So what is the difference?" />
          <ul>
            <li>Functional Components require less code</li>
            <li>
              Class Components extend from the <Emb text="React.Component" />{" "}
              module, functions are built from nothing
            </li>
            <li>Functional Components are stateless</li>
            <li>
              Functional Components don't have access to{" "}
              <Emb text="setState()" /> and <Emb text="lifecycle methods" />{" "}
              (lifecycle methods are extended from{" "}
              <Emb text="React.Component" />)
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

          <Emb text="Class Component Lifecycle Methods:" />

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
              <Emb text="Output:" />
              <ClassMountExample />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
