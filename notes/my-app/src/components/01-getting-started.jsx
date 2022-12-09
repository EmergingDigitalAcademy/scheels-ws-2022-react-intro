import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import Bem from "./reused-components/Bem";
import MyContainer from "./reused-components/MyContainer";

export default function GettingStarted() {
  const terminalCommandsString = `npx create-react-app my-app
cd my-app
npm start`;

  const colLeft = (
    <div>
      <Bem>What is React?</Bem>
      <p>
        "React is a JavaScript library for building user interfaces."{" "}
        <em>
          &mdash;{" "}
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
          >
            ReactJs.org
          </a>
        </em>
        <br />
        <br />
        <Bem>React</Bem> is an open source project built by <Bem>Facebook</Bem>{" "}
        that allows us to create <Bem>simple, fast,</Bem> and{" "}
        <Bem>responsive</Bem> UIs.
      </p>
      <hr />
      <br />
      <Bem>React Initialization</Bem>

      <ul>
        <li>
          To start a new react project, we use the npm package,{" "}
          <Bem>create-react-app</Bem>
        </li>
        <ul>
          <li>
            <em>
              If you have previously installed <Bem>create-react-app</Bem>{" "}
              globally, uninstall the package through npm or yarn first. This is
              to ensure that npx is always using the latest versions of
              create-react-app.
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
                <Bem>react-dom</Bem> is what allows us to render components to
                and manipulate the DOM
              </li>
              <li>
                <Bem>react-scripts</Bem> includes many npm scripts for startup,
                testing, etc.
              </li>
            </em>
          </ul>
        </li>
        <li>
          Once <Bem>create-react-app</Bem> finishes installing, <Bem>cd</Bem>{" "}
          into your newly created directory, and run the command{" "}
          <Bem>npm start</Bem> to initialize the web server
        </li>
      </ul>
    </div>
  );

  const colRight = (
    <div>
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
  );

  return (
    <MyContainer
      headerText="Getting Started with React"
      colLeft={colLeft}
      colRight={colRight}
    />
  );
}
