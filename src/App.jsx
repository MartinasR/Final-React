import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import Add from "./components/Add/add";
import LoggedIn from "./components/Home/loggedInn";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<LoggedIn />} />
        <Route path="/add" element={<Add />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;