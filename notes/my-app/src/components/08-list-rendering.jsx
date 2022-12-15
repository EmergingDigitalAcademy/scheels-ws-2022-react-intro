import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import MyContainer from "./reused-components/MyContainer";
import Bem from "./reused-components/Bem";

export default function ListRendering() {
  /* ~~~~~~~ Your code goes here ~~~~~~~~~ */

  /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
  const listExample = ` function List() {
    const [state, setState] = useState(["Chocolate", "Jawbreakers", "Skittles"])

    return (
      <ul>
        {state.map((candy) => <li key={candy}>{candy}</li>)}
      </ul>
    )
  }`;

  const colLeft = (
    <div>
      <Bem>What is list rendering?</Bem>
      <p>
        List rendering is the act of{" "}
        <Bem>
          rendering a set of elements based by transforming across an array.
        </Bem>
        <br />
        <br />
        In React, transforming across an array to render a list is nearly
        identical to transforming an array. Both use the <Bem>.map()</Bem>{" "}
        method.
        <br />
        <br />
        It is <Bem>extremely important when you are rendering a list</Bem>in
        react to <Bem>include a key attribute</Bem> on the elements you are
        rendering. <Bem>Keys help react identify elements</Bem> that are
        rendered out of a map.
      </p>
      <hr />
      <br />
      <Bem>Examples of Conditional Rendering:</Bem>
      <SyntaxHighlighter
        className="codeHighlight"
        language="jsx"
        style={vscDarkPlus}
      >
        {listExample}
      </SyntaxHighlighter>
      <p>
        In this example, we create a new component that{" "}
        <Bem>will return a &lt;ul&gt; element.</Bem> Inside the unordered list,
        we are <Bem>mapping over the state</Bem> and are{" "}
        <Bem>rendering a &lt;li&gt; element for each item</Bem> in the array. We
        give each list item the{" "}
        <Bem>key attribute with the value of the array item.</Bem>
      </p>
    </div>
  );
  const colRight = (
    <div>
      {" "}
      <Bem>Activity</Bem>
      <p>Time to practice what you list rendering. Your task is to:</p>
      <ul>
        <li>
          Locate the file <Bem>08-list-rendering.jsx</Bem>
        </li>
        <li>
          In the top level component, <Bem>function ListRendering(),</Bem>{" "}
          create a new functional component in the designated area that will:
          <em>
            <ul>
              <li>
                Use the <b>useState()</b> hook to create an array full of
                objects. These objects will have the keys of name, hair color,
                and eye color.
              </li>
              <li>
                <b>In the return of your component,</b> create a table with 3
                columns in the <b>&lt;thead&gt;</b>
              </li>
              <li>
                <b>In the table body,</b> map over your state and render a{" "}
                <b>&lt;trow&gt;</b> for each object, filled with the objects
                data in <b>&lt;td&gt;</b> elements. One <b>&lt;td&gt;</b> for
                each key in the object
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
    <MyContainer
      headerText="List Rendering"
      colLeft={colLeft}
      colRight={colRight}
    />
  );
}
