
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import About from "../components/About";
import StudentPage from "../components/StudentPage";
import StaffPage from "../components/StaffPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route → Login */}
        <Route path="/" element={<Login />} />

        {/* Student dashboard */}
        <Route path="/student" element={<StudentPage />} />

        {/* Staff dashboard */}
        <Route path="/staff" element={<StaffPage />} />
      </Routes>
    </Router>
  );
}

export default App;
