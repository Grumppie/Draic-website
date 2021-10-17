import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Acheivement from "./Components/Acheivement";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="content">
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/acheivement">
            <Acheivement />
          </Route>
        </div>

      </div>
    </BrowserRouter >

  );
}

export default App;
