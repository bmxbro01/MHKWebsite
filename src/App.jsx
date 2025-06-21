import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import NavBar from './components/NavBar';
import AuthForm from './components/AuthForm';
import Home from './pages/home/home';
import Schedule from './pages/schedule/Schedule';
import NotFound from './pages/notFoundPage/NotFound';
import Contact from './pages/contact/contact';
import Level1 from './pages/fightStyle/level1/Level1';
import Level2 from './pages/fightStyle/level2/Level2';
import Level3 from './pages/fightStyle/level3/Level3';
import Conditional from './pages/fightStyle/blackBelts/conditionals/Conditionals';
import Deg1 from './pages/fightStyle/blackBelts/deg1/Deg1';
import Deg2 from './pages/fightStyle/blackBelts/deg2/deg2';

const AppContent = () => {
  const { isAuthenticated, loading } = useAuth();

  // Show loading screen while checking authentication
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.2rem'
      }}>
        Loading...
      </div>
    );
  }

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return <AuthForm />;
  }

  // If authenticated, show the full website
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
        <Route path="/conditionals" element={<Conditional />} />
        <Route path="/deg1" element={<Deg1 />} />
        <Route path="/deg2" element={<Deg2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
