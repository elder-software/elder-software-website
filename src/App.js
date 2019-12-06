import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import About from "./components/pages/About";
import Header from "./components/common/Header";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;