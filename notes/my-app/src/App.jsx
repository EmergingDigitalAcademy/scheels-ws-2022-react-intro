import edaLogo from "./static/eda-logo-purple.png";
import GettingStarted from "./components/01-getting-started";
import Jsx from "./components/02-jsx";
import FunctionalComponents from "./components/03-functional-components";
import State from "./components/04-state";

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
        </div>
      </div>
      <footer>
        <b>Powered by Emerging Digital Academy, 2022</b>
      </footer>
    </div>
  );
}

export default App;
