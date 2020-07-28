import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./components/common/pageElements/Header";
import Footer from "./components/common/pageElements/Footer";

const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      <BrowserRouter>
        <div style={{
          backgroundColor: '',
          minHeight: '100vh',
          height: '100%',
          width: '100%',
          position: 'relative',
        }}>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/work" exact component={Work} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;