'use client'
import React, { useState } from 'react';
import Header from '../header';
import Sidebar from '../sidebar';

const AppShell: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <div className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </div>
      </main>
    </div>
  );
};

export default AppShell;
