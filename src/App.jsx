import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import SearchResults from './pages/SearchResults';
import PgDetails from './pages/PgDetails';
import UserProfile from './pages/UserProfile';
import OwnerDashboard from './pages/OwnerDashboard';
import BlogPage from './pages/BlogPage';

// Components
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [userType, setUserType] = useState('user'); // 'user' or 'owner'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const openAuthModal = (mode, type) => {
    setAuthMode(mode);
    setUserType(type);
    setIsAuthModalOpen(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage openAuthModal={openAuthModal} />} />
        <Route path="/home" element={<HomePage isLoggedIn={isLoggedIn} openAuthModal={openAuthModal} />} />
        <Route path="/search" element={<SearchResults isLoggedIn={isLoggedIn} openAuthModal={openAuthModal} />} />
        <Route path="/pg/:id" element={<PgDetails isLoggedIn={isLoggedIn} openAuthModal={openAuthModal} />} />
        <Route path="/profile" element={<UserProfile isLoggedIn={isLoggedIn} />} />
        <Route path="/owner" element={<OwnerDashboard isLoggedIn={isLoggedIn} />} />
        <Route path="/blogs" element={<BlogPage isLoggedIn={isLoggedIn} openAuthModal={openAuthModal} />} />
      </Routes>
      
      {/* Auth Modal - Conditional Rendering */}
      {isAuthModalOpen && (
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)}
          mode={authMode}
          userType={userType}
          onLogin={handleLogin}
          onSwitchMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
        />
      )}
    </Router>
  );
}

export default App;
