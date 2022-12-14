import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import Bem from "./reused-components/Bem";
import MyContainer from "./reused-components/MyContainer";

export default function Jsx() {
  const jsxStatement = `  const element = <p>Hello World</p>;`;

  const jsxVariableExample = `  function JsxVariable() {
    const string = "Hello World";
  
    return (
      <p>{string}</p>;
    )
  }`;

  const jsxConditionExample = ` function JsxCondition() {
    const bool = true;
  
    if (bool) {
      return <p>This</p>
    } else {
      return <p>That</p>
    }
  }`;

  const colLeft = (
    <div>
      <Bem>What is JSX?</Bem>
      <p>
        "JSX is a syntax extension for JavaScript."{" "}
        <em>
          &mdash;{" "}
          <a href="https://reactjs.org/docs/introducing-jsx.html">
            ReactJs.org
          </a>
        </em>
        <br />
        <br />
        Take a moment to consider this statement and think about what is going
        on:
      </p>
      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {jsxStatement}
      </SyntaxHighlighter>

      <p>
        Is this <Bem>JavaScript?</Bem> Is this <Bem>HTML?</Bem> This is actually{" "}
        <Bem>JSX!</Bem>
        <br />
        <br />
        <Bem>JSX</Bem> stands for <Bem>JavaScript-XML.</Bem> It may remind you
        of a templating language, that's because it follows the idea that{" "}
        <Bem>rendering logic is inherently coupled with other UI logic.</Bem>
      </p>
      <hr />
      <br />
      <Bem>Why use JSX?</Bem>
      <p>
        Instead of separating markup and logic languages into separate files,{" "}
        <Bem>React</Bem> gives us a handy tool that combines the two. Many find{" "}
        <Bem>JSX</Bem> to be a <Bem>helpful visual aid</Bem> when building UIs,
        and also provides us with more <Bem>robust error handling.</Bem>
        <br />
        <br />
        You don't <em>have</em> to use <Bem>JSX</Bem> while developing in React
        as <Bem>React can fully read JavaScript</Bem> by itself, but{" "}
        <Bem>JSX is strongly recommended</Bem> when building UIs.
      </p>
    </div>
  );

  const colRight = (
    <div>
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
        This example declares a string in a new <Bem>functional component,</Bem>{" "}
        renders a <Bem>&lt;p&gt;</Bem> element, and inserts the declared string
        as a child of the <Bem>&lt;p&gt;</Bem> element by wrapping the variable
        in curly braces ( <Bem>&#123; &#125;</Bem> ).
        <br />
        <br />
        You can put <Bem>any valid JavaScript expression</Bem> inside of curly
        braces in <Bem>JSX.</Bem>
      </p>
      <br />
      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {jsxConditionExample}
      </SyntaxHighlighter>
      <Bem>JSX</Bem> is also considered <Bem>valid JavaScript!</Bem>
      <p>
        This example declares a boolean in a new{" "}
        <Bem>functional component,</Bem> initializes a conditional based on the
        bool variable, and renders a <Bem>&lt;p&gt;</Bem> element with the text
        of <Bem>This</Bem> or <Bem>That</Bem> based on the result of the
        condition.
      </p>
    </div>
  );

  return <MyContainer headerText="JSX" colLeft={colLeft} colRight={colRight} />;
}
