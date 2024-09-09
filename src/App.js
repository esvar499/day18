import React from 'react';
import products from './compontent/Data';
import Cards from './compontent/Cards'; 

const App = () => {
  return (
    <div className="App">
      <Cards products={products} />
    </div>
  );
}

export default App;
