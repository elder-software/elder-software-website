import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { About, Work, Products, Contact } from './pages';

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
          <Route path="/" exact component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/products" exact component={Products} />
          <Route path="/contact" exact component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
