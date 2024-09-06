import Container from "./components/Container";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {

  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/auth" element={<Login />} />
            <Route path="/home" element={<Container />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
