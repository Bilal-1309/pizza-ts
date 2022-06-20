import React from "react";
import {Route, Routes} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";

import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import MainLayout from "./layouts/MainLayout";

function App() {


  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch();

  return (
            <Routes>
              <Route path='/' element={<MainLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/pizza/:id' element={<FullPizza/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Route>
            </Routes>
  );
}

export default App;
