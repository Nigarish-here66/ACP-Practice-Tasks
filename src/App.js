import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import "./styles/Navbar.css";
// import TaskManager from "./Mids/TaskManager";
import List from "./components/15.Childparent";
import BudgetTracker from "./Mains/BudgetTracker";

const App = () => {
  return (
    // <Router>
    //   <nav>
    //     <ul>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/about">About</Link></li>
    //     </ul>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </Router>

    <div>
      {/* <TaskManager /> */}
      {/* <List /> */}
      <BudgetTracker />
    </div>
  );
};

export default App;
