import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import KaraokeComponent from "./components/NavbarGlass";
import Login from './pages/Login';
import Signup from './pages/Signup';
import EditTemplate from './pages/EditTemplate';
import Home from "./pages/Home";
import { UserRecordProvider } from './UserRecordContext';

function App() {
  return (
    <div>
      <UserRecordProvider>
        <Router>
          <KaraokeComponent />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/main" element={<Home />} />
            <Route path="/templates/:template" element={<EditTemplate />} />
          </Routes>
        </Router>
      </UserRecordProvider>
    </div>
  );
}

export default App;
