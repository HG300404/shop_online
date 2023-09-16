import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { HeaderComponent } from "./components/HeaderComponent";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slides/counterSlide";
import styled from "styled-components";
function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            return <Route path={route.path} element={<Page />} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
