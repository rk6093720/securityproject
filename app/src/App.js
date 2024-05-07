import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Main from "./MainComponent/Main";
import Login from "./pages/Login";
import { setAuthStatus } from "./redux/Auth/action";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (token) {
      // Dispatch an action to set authentication status to true
      dispatch(setAuthStatus(true));
    }
  }, [dispatch]);
  console.log(isAuth);
  return (
    <div className="App">
         <Routes>
        {/* If user is not authenticated, redirect to Login */}
        {!isAuth && (
          <Route path="/" element={<Navigate to="/login" replace />} />
        )}
        {/* Login Route */}
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup/>}/>
        {/* Main Route */}
        {isAuth && <Route path="/*" element={<Main />} />}
      </Routes>
    </div>
  );
}

export default App;
