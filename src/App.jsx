import { Outlet } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import "./App.css";
import ServiceHome from "./Components/ServiceHome";

function App() {
  return (
    <>
      <Navbar />
  
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
