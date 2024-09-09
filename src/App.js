import React, { useState } from 'react'; 
import Cards from './Components/Cards';
import products from './Component/Data'; 
function App() {
  const [productList] = useState(products); 
  return (
    <div className="App">
      <Cards products={productList} />
    </div>
  );
}

export default App;
