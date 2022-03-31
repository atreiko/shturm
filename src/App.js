import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import {
  Home, 
  About,
  Page404
} from './pages';

const App = () => {
  return (
    <>
      <Routes> 
            <Route path='/' element={<Layout />}> 
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='*' element={<Page404 />} /> 
            </Route>
        </Routes>
    </>
  );
}

export default App;
