import React, { useState } from 'react'; 
import Cards from './Compontent/Cards';
import products from './Compontent/Data'; 
function App() {
  const [productList] = useState(products); 
  return (
    <div className="App">
      <Cards products={productList} />
    </div>
  );
}

export default App;
