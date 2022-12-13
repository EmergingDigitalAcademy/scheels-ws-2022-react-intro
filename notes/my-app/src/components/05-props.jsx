import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import Bem from "./reused-components/Bem";
import MyContainer from "./reused-components/MyContainer";

export default function Props() {
  const colLeft = <div></div>;

  const colRight = <div></div>;

  return (
    <MyContainer headerText="Props" colLeft={colLeft} colRight={colRight} />
  );
}
