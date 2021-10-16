import Navbar from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <About />
        </div>
      </div>


    </BrowserRouter >

  );
}

export default App;
