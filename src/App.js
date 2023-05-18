import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Layout from './Layout';
import Form from './page/Form';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route path='/' index element={<Home />} />
          <Route path='register' element={<Form />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
