import edaLogo from "./static/eda-logo-purple.png";
import FunctionalComponents from "./components/02-functional-components";
import GettingStarted from "./components/01-getting-started";
import State from "./components/03-state";

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
