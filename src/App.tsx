import "./App.css";

import { LoginPage } from "./pages/LoginPage/LoginPage";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
