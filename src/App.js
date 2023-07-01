import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import ProductView from './components/ProductView';
import ProductEdit from './components/ProductEdit';
import { fetchConfig } from './ReduxStore/slices/configSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} /> {/* Use element instead of component */}
        <Route path="/product" element={<ProductView />} /> {/* No need for exact prop */}
        <Route path="/product/edit" element={<ProductEdit />} />
      </Routes>
    </Router>
  );
}

export default App;

