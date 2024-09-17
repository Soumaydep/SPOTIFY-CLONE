import Container from "./components/Container";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import CleanUrlAfterAuth from "./components/CleanUrlAfterAuth";
import { useState } from "react";


function App() {

  const [user, setUser] = useState(null);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login setUser={setUser}/>} />
          <Route path="/home" element={<Container user={user}/>} />
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
