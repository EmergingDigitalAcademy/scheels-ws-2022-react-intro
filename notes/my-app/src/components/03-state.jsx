// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { useState } from "react";

// import Bem from "./reused-components/Bem";
import MyContainer from "./reused-components/MyContainer";
import MyHeader from "./reused-components/MyHeader";

export default function State() {
  // const [state, setState] = useState("");

  const headerText = "State";

  return (
    <MyContainer
      myHeader={<MyHeader headerText={headerText} />}
      // colLeft={colLeft}
      // colRight={colRight}
    />
  );
}
