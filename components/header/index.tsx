// Header.tsx
import React from 'react';
import { Bars3Icon, BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="sticky top-0 z-40 flex h-16 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-ml-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="sr-only">{sidebarOpen ? 'Close sidebar' : 'Open sidebar'}</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      {/* Rest of the header content */}
    </div>
  );
};

export default Header;
