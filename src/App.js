import React from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListArticleComponent from './components/ListArticleComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className='container'>
        <ListArticleComponent/>
      </div>
      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
