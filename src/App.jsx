import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import Navbar from './components/organisms/Navbar';
import DashboardLayout from './components/templates/DashboardLayout';

// Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Activity from './pages/Activity';
import Accounts from './pages/Accounts';
import Groups from './pages/Groups';
import CreateGroup from './pages/CreateGroup';
import JoinGroup from './pages/JoinGroup';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<><Navbar /><LandingPage /></>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard Routes (Protected Layout) */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/groups/create" element={<CreateGroup />} />
        <Route path="/groups/join" element={<JoinGroup />} />
      </Route>
    </Routes>
  );
}

export default App;
