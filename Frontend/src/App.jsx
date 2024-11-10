import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftPanel from "./Components/LeftPanel/LeftPanel";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Controls from "./Components/Controls/Controls";
import Profile from "./Components/User/Profile";
import DigitalTwin from "./Components/DigitalTwin/DigitalTwin";

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
        <Route
          path="controls"
          element={
            <>
              <LeftPanel />
              <Controls />
            </>
          }
        />
        <Route
          path="digitalTwin"
          element={
            <>
              <LeftPanel />
              <DigitalTwin />
            </>
          }
        />
        <Route
          path="profile"
          element={
            <>
              <LeftPanel />
              <Profile />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
