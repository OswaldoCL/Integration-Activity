import Users from "./components/Users";
import PageItems from "./pages/PageItems";
import PageDelete from "./pages/PageDelete";
import PageUpdate from "./pages/PageUpdate";
import PageUsers from './pages/PageUsers';
import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';

function App() {
  return(
      <div>
        <h2>Welcome</h2>
        <h3>Please, select an option.</h3>
        
        <Routes>
          <Route exact path='/' element={<PageUsers />} />
          <Route path='/Update' element={<PageUpdate />} />
          <Route path='/Delete' element={<PageDelete />} />
          <Route path='/Items' element={<PageItems />} />
        </Routes>
      </div>
  );
}



export default App;
