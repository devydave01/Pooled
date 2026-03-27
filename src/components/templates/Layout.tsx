import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[88px]">
        {/* Added padding top so content isn't under the fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
