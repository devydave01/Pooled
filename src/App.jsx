import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/templates/Layout'
import LandingPage from './pages/LandingPage'
// Assuming these pages will be created soon
import Dashboard from './pages/Dashboard'
import Accounts from './pages/Accounts'
import Groups from './pages/Groups'
import Activity from './pages/Activity'

import DashboardLayout from './components/templates/DashboardLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/activity" element={<Activity />} />
      </Route>
    </Routes>
  )
}

export default App
