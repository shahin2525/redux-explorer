import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
