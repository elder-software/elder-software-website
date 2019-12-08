import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import About from "./components/pages/About";
import Header from "./components/common/Header";
import Logo from './components/assets/logo.jpg';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          {/* <Header /> */}
          <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'center', margin: 30 }}>
            <img style={{ width: 200 }} src={Logo} alt={'something'} />
          </div>

          <h1 style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'center', margin: 30 }}>
            Website Coming Soon
          </h1>

          {/* <Route path="/" exact component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;