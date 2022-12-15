import edaLogo from "../static/eda-logo-purple.png";
import GettingStarted from "./01-getting-started";
import Jsx from "./02-jsx";
import FunctionalComponents from "./03-functional-components";
import Hooks from "./04-hooks";
import State from "./05-state";
import Props from "./06-props";
import ConditionalRendering from "./07-conditional-rendering";
import ListRendering from "./08-list-rendering";

function App() {
  return (
    <div className="App">
      <div id="content">
        <header>
          <h1>React Functional Refresh</h1>
          <img src={edaLogo} alt="EDA Logo" id="edaLogo" />
        </header>
        <div>
          <GettingStarted />
          <Jsx />
          <FunctionalComponents />
          <Hooks />
          <State />
          <Props />
          <ConditionalRendering />
          <ListRendering />
        </div>
      </div>
      <footer>
        <b>Powered by Emerging Digital Academy, 2022</b>
      </footer>
    </div>
  );
}

export default App;
