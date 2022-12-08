import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import Bem from "./reused-components/Bem";

export default function GettingStarted() {
  const terminalCommandsString = `npx create-react-app my-app
cd my-app
npm start`;

  const jsxStatement = `const element = <p>Hello World</p>;`;

  const jsxVariableExample = `function JsxVariable() {
  const string = "Hello World";

  return (
    <p>{string}</p>;
  )
}`;

  const jsxConditionExample = `function JsxCondition() {
  const bool = true;

  if (bool) {
    return <p>This</p>
  } else {
    return <p>That</p>
  }
}`;

  return (
    <div className="container">
      <h2>Getting Started with React</h2>
      <p>
        <Bem>What is React?</Bem>
        &nbsp; "React is a JavaScript library for building user interfaces."{" "}
        <em>
          &mdash; <a href="http://reactjs.org">Reactjs.org</a>
        </em>
        <br />
        <br />
        <Bem>React</Bem> is an open source project built by <Bem>Facebook</Bem>{" "}
        that allows us to create <Bem>simple, fast,</Bem> and{" "}
        <Bem>responsive</Bem> UIs.
      </p>

      <hr />
      <br />

      <div className="colWrapper">
        <div>
          <Bem>React Initialization</Bem>

          <ul>
            <li>
              To start a new react project, we use the npm package,{" "}
              <Bem>create-react-app</Bem>
            </li>
            <ul>
              <li>
                <em>
                  If you have previously installed <b>create-react-app</b>{" "}
                  globally, uninstall the package through npm or yarn first.
                  This is to ensure that npx is always using the latest versions
                  of create-react-app.
                </em>
              </li>
            </ul>
            <li>
              <Bem>create-react-app</Bem> will install three libraries to your
              project directory; <Bem>react</Bem>, <Bem>react-dom</Bem>, and{" "}
              <Bem>react-scripts</Bem>
              <ul>
                <em>
                  <li>
                    <b>react-dom</b> is what allows us to render components to
                    and manipulate the DOM
                  </li>
                  <li>
                    <b>react-scripts</b> includes many npm scripts for startup,
                    testing, etc.
                  </li>
                </em>
              </ul>
            </li>
            <li>
              Once <b>create-react-app</b> finishes installing, <b>cd</b> into
              your newly created directory, and run the command <b>npm start</b>{" "}
              to initialize the web server
            </li>
          </ul>

          <hr />
          <br />

          <Bem>Terminal Commands:</Bem>

          <br />

          <SyntaxHighlighter
            className="codeHighlight"
            language="zsh"
            style={vscDarkPlus}
          >
            {terminalCommandsString}
          </SyntaxHighlighter>
        </div>

        <hr />

        <div>
          <Bem>JSX</Bem>
          <p>
            Take a few minutes to consider this statement and think about what
            is going on:
          </p>

          <SyntaxHighlighter
            className="codeHighlight"
            language="jsx"
            style={vscDarkPlus}
          >
            {jsxStatement}
          </SyntaxHighlighter>

          <p>
            Is this <Bem>JavaScript?</Bem> Is this <Bem>HTML?</Bem> It's
            actually neither!
            <br />
            <br />
            This is called <Bem>JSX</Bem>, and it stands for{" "}
            <Bem>JavaScript-XML. JSX</Bem> may remind you of a templating
            language, but it is actually a syntax extension for{" "}
            <Bem>JavaScript!</Bem>
            <br />
            <br />
            You don't <em>have</em> to use <Bem>JSX</Bem> while developing in{" "}
            <Bem>React</Bem> as <Bem>React</Bem> can fully read{" "}
            <Bem>JavaScript</Bem> by itself, but it is strongly recommended when
            building UIs.
          </p>

          <hr />
          <br />

          <Bem>Why use JSX?</Bem>

          <p>
            Instead of separating markup and logic languages into separate
            files, <Bem>React</Bem> gives us a handy tool that combines the two.
            Many find <Bem>JSX</Bem> to be a helpful <Bem>visual aid</Bem> when
            building UIs, and also provides us with more{" "}
            <Bem>robust error handling.</Bem>
          </p>

          <hr />
          <br />

          <Bem>Examples of JSX:</Bem>

          <br />

          <SyntaxHighlighter
            className="codeHighlight"
            language="jsx"
            style={vscDarkPlus}
          >
            {jsxVariableExample}
          </SyntaxHighlighter>

          <p>
            This example declares a string in a new{" "}
            <Bem>functional component,</Bem> renders a <Bem>&lt;p&gt;</Bem>{" "}
            element, and inserts the declared string as a child of the{" "}
            <Bem>&lt;p&gt;</Bem> element by wrapping the variable in curly
            braces ( <Bem>&#123; &#125;</Bem> ).
            <br />
            <br />
            You can put <Bem>any valid JavaScript expression</Bem> inside of
            curly braces in <Bem>JSX.</Bem>
          </p>

          <SyntaxHighlighter
            className="codeHighlight"
            language="jsx"
            style={vscDarkPlus}
          >
            {jsxConditionExample}
          </SyntaxHighlighter>

          <p>
            <Bem>JSX</Bem> is also considered <Bem>valid JavaScript!</Bem>
            <br />
            <br />
            This example declares a boolean in a new{" "}
            <Bem>functional component,</Bem> initializes a conditional based on
            the bool variable, and renders a <Bem>&lt;p&gt;</Bem> element with
            the text of <Bem>This</Bem> or <Bem>That</Bem> based on the result
            of the condition.
          </p>
        </div>
      </div>
    </div>
  );
}
