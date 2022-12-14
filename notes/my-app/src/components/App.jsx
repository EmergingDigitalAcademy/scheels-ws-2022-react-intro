import edaLogo from "../static/eda-logo-purple.png";
import GettingStarted from "./01-getting-started";
import Jsx from "./02-jsx";
import FunctionalComponents from "./03-functional-components";
import State from "./04-state";
import Props from "./05-props";
import Hooks from "./06-hooks";
import ConditionalRendering from "./07-conditional-rendering";
import ListRendering from "./08-list-rendering";
import ReactRouter from "./09-react-router";

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
          <State />
          <Props />
          <Hooks />
          <ConditionalRendering />
          <ListRendering />
          <ReactRouter />
        </div>
      </div>
      <footer>
        <b>Powered by Emerging Digital Academy, 2022</b>
      </footer>
    </div>
  );
}

export default App;
