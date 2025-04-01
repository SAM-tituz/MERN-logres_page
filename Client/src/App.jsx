import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext.jsx";

axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <UserContextProvider>
        <Navbar></Navbar>
        <Toaster position="top-right" toastOption={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
