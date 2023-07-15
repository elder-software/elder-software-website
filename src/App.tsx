import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/pageElements/Header';
import Footer from './components/pageElements/Footer';
import { Home, Work, About, Contact } from './pages';

const App: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <BrowserRouter>
        <div
          style={{
            backgroundColor: '',
            minHeight: '100vh',
            height: '100%',
            width: '100%',
            position: 'relative'
          }}
        >
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
};

export default App;
