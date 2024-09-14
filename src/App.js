import Container from "./components/Container";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import CleanUrlAfterAuth from "./components/CleanUrlAfterAuth";


function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Container />} />
          {/* This route will handle dynamic URLs like /artists/:id */}
          <Route path="/:type/:id" element={<Container />} />
          
          {/* Redirect all other routes back to login */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <CleanUrlAfterAuth/> */}
      </Router>
    </AuthProvider>
  );
}

export default App;
