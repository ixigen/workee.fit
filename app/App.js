import React from 'react';
import Categories from './categories/Categories';
import './App.css';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Workee.fit</h1>
        
        <Categories />
      </div>
    );
  }
})

export default App;