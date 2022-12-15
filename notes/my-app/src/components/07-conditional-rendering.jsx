import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import Bem from "./reused-components/Bem";
import MyContainer from "./reused-components/MyContainer";

export default function ConditionalRendering() {
  /* ~~~~~~~ Your code goes here ~~~~~~~~~ */

  /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
  const ifElseExample = ` function Message(props) {
    if (props.state) {
      return <p>Hello</p>
    } else {
      return <p>Goodbye</p>
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'))
  
  // Changing the boolean in the state attribute will change what we render!
  root.render(<Message state={true} />)
  `;

  const ternaryExample = ` function Message(props) {
    return <p>{state ? "Hello" : "Goodbye"}</p>
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'))
  
  // Changing the boolean in the state attribute will change what we render!
  root.render(<Message state={true} />)
  `;

  const colLeft = (
    <div>
      <Bem>What is condition rendering?</Bem>
      <p>
        Conditional rendering is the act of{" "}
        <Bem>
          rendering or not rendering an element or set of elements based on a
          condition or set of conditions.
        </Bem>
        <br />
        <br />
        In React, conditional rendering works the same way conditions work in
        JavaScript. We are able to use operators like:
      </p>
      <ul>
        <li>
          <Bem>if</Bem> and <Bem>else</Bem>
        </li>
        <li>
          Ternary expressions <Bem>(&nbsp; ? : &nbsp;)</Bem>
        </li>
        <li>
          Logical and operator <Bem>(&nbsp; && &nbsp;)</Bem>
        </li>
      </ul>

      <hr />
      <br />

      <Bem>Examples of Conditional Rendering:</Bem>
      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {ifElseExample}
      </SyntaxHighlighter>
      <p>
        In this example, we create a new component that{" "}
        <Bem>will return a &lt;p&gt; element</Bem> holding the message of either
        "Hello" or "Goodbye" <Bem>depending on the value of the state prop</Bem>{" "}
        that we are passing in.
      </p>
      <br />
      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {ternaryExample}
      </SyntaxHighlighter>
      <p>
        This example achieves the <Bem>same functionality as the previous,</Bem>{" "}
        except we have{" "}
        <Bem>
          replaced the if else expression with an inline ternary expression. if
          else
        </Bem>{" "}
        expressions are <Bem>not accepted inside the return</Bem> of a
        component.
      </p>
    </div>
  );
  const colRight = (
    <div>
      <Bem>Activity</Bem>
      <p>
        Time to practice what you learned from condition rendering by remaking
        the <Bem>Mount Component Button</Bem> and{" "}
        <Bem>ClassMountExample component</Bem> into a functional component! Your
        task is to:
      </p>
      <ul>
        <li>
          Locate the file <Bem>07-conditional-rendering.jsx</Bem>
        </li>
        <li>
          In the top level component,{" "}
          <Bem>function ConditionalRendering(),</Bem> create a new functional
          component in the designated area that will:
          <em>
            <ul>
              <li>
                Use the <b>useEffect()</b> hook to <b>console.log()</b> two
                statements during different events
              </li>
              <li>
                <b>When the component mounts to the DOM,</b> log a message that
                says <b>I am mounted</b>
              </li>
              <li>
                <b>When the component unmounts from the DOM,</b> log a message
                that says <b>I am unmounted</b>
              </li>
              <li>
                The component should{" "}
                <b>return a &lt;p&gt; element with your name</b>
              </li>
            </ul>
          </em>
        </li>
        <li>
          Finally, locate the constant variable, <Bem>colRight,</Bem> and at the
          end of the <Bem>&lt;div&gt;</Bem> element, render your components as a
          self closing element in the space provided
        </li>
      </ul>
      <hr />
      <br />
      {/* ~~~~~~~ Render your components here ~~~~~~~~~ */}

      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
    </div>
  );

  return (
    <MyContainer
      headerText="Conditional Rendering"
      colLeft={colLeft}
      colRight={colRight}
    />
  );
}
