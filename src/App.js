import './bootstrap.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/page/Home'
import Product from './page/Product';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setData={setData} />} />
        <Route path="/product" element={<Product data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
