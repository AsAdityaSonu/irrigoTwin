import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftPanel from "./Components/LeftPanel/LeftPanel";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LeftPanel />
              <Home />
            </>
          }
        />
        <Route
          path="dashboard"
          element={
            <>
              <LeftPanel />
              <Dashboard />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <LeftPanel />
              <About />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
