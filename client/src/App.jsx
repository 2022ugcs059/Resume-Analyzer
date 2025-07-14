// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import Login     from './pages/Login.jsx';
import Signup    from './pages/SignUp.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Chat      from './pages/Chat.jsx';
import Compare   from './pages/Compare.jsx';

export default function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"         element={<Login/>} />
          <Route path="/signup"   element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/chat"      element={<Chat/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}