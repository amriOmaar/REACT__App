import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hello from "./Components/Hello";
// import FunctUseState from "./Components/FunctUseState";
// import Products from "./Components/Products"
// import Products1 from "./Components/Products1";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <>
      {/* <Products1></Products1> */}
      {/* <FunctUseState></FunctUseState> */}
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path= "/Hello" element={ <Hello /> } />
      </Routes>
    </>
  );
}

export default App;




