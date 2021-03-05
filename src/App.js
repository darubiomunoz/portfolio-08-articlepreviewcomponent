import React from 'react';
import './App.css';

import ArticlePreview from './components/ArticlePreview';


const App = () => {
  return (
    <div className="App">
      <ArticlePreview name="Michelle Appleton" date="28 Jun 2020" />
    </div>
  );
}

export default App;