import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: 'fas fa-home' },
    { name: 'Mata Pelajaran', path: '/subjects', icon: 'fas fa-book' },
    { name: 'Kelas', path: '/classes', icon: 'fas fa-chalkboard' },
    { name: 'Siswa', path: '/students', icon: 'fas fa-users' },
    { name: 'Ujian', path: '/exams', icon: 'fas fa-pen-alt' },
    { name: 'Sesi Ujian', path: '/session-exams', icon: 'fas fa-clock' },
    { name: 'Laporan Nilai', path: '/report-grades', icon: 'fas fa-chart-line' },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen shadow-lg transition-all ease-in-out duration-300">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        <span className="text-blue-400">Ujian</span> Online
      </div>
      <ul className="mt-8 space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="flex items-center px-6 py-3 text-lg rounded-md hover:bg-gray-700 hover:scale-105 transition-all duration-200"
            >
              <i className={`${item.icon} text-xl mr-4`}></i>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
