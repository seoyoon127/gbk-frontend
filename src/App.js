import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import MyPage from "./pages/MyPage.jsx";
import PlanRoom1 from "./pages/PlanRoom1.jsx";
import PlanRoom2 from "./pages/Planroom2.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="/Home" element={<Home />}/>
              <Route path="/LogIn" element={<LogIn />}/>
              <Route path="/SignUp" element={<SignUp />}/>
              <Route path="/MyPage" element={<MyPage />}/>
              <Route path="/PlanRoom1" element={<PlanRoom1 />}/>
              <Route path="/PlanRoom2" element={<PlanRoom2 />}/>
              <Route path="/*" element={<NotFound />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
