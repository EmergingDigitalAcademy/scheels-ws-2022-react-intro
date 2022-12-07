import edaLogo from "./static/eda-logo-purple.png";
import FunctionalComponents from "./modules/02-functional-components";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Functional Refresh</h1>
        <img src={edaLogo} alt="EDA Logo" id="edaLogo" />
      </header>
      <div className="container">
        <FunctionalComponents />
      </div>
    </div>
  );
}

export default App;
