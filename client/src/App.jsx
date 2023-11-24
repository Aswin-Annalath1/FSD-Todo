//Import Sction
import Admin from "./components/Admin";
import Login from "./components/Login";
import Register from "./components/Register";
import Todolistmain from "./components/Todolistmain";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {

  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/todolistmain/:userid" element={<Todolistmain/>} />
        <Route path="/admin" element={<Admin/>} />
        {/* Any unknown route gone then this shown.. */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>

    </>
  );
}

export default App;

