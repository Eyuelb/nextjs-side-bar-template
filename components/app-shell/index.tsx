"use client";
import React, { useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import "./style.module.css";

interface AppShellProps {
  children: React.ReactNode;
}
const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--root-bg)] text-[var(--root-text-color)]">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="lg:pl-[var(--sidebar-width)] flex-1 relative z-0 overflow-y-auto focus:outline-none">
        {children}
      </main>
    </div>
  );
};

export default AppShell;
