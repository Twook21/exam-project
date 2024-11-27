import React from "react";
import { Link } from "react-router-dom"; // Import Link untuk navigasi
import Sidebar from "../components/Sidebar";

const ClassesPage = () => {
  // Ambil data user dari localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Cek apakah user ada
  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center bg-white p-8 rounded shadow-lg">
          <h1 className="text-4xl font-bold text-red-600">User Not Found</h1>
          <p className="mt-4 text-gray-700">
            Please{" "}
            <a href="/login" className="text-blue-500 underline font-medium">
              log in
            </a>{" "}
            to access this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Kelas</h1>
          {/* Tombol Tambah Kelas */}
          <Link
            to="/classes/add" // Arahkan ke halaman tambah kelas
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Tambah Kelas
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Total Kelas */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Total Kelas</h2>
            <p className="mt-2 text-4xl font-bold">10</p>
            <div className="mt-4 text-sm text-blue-200">
              +1% from last week
            </div>
          </div>

          {/* Card 2: Kelas Terbaru */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Kelas Terbaru</h2>
            <p className="mt-2 text-4xl font-bold">Matematika</p>
            <div className="mt-4 text-sm text-green-200">
              New class for the semester
            </div>
          </div>

          {/* Card 3: Kelas Terpopuler */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Kelas Terpopuler</h2>
            <p className="mt-2 text-4xl font-bold">Fisika</p>
            <div className="mt-4 text-sm text-yellow-200">
              Most enrolled this semester
            </div>
          </div>
        </div>

        {/* Table Section: Daftar Kelas */}
        <div className="mt-8 bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              Daftar Kelas
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-50 text-gray-800 font-medium uppercase tracking-wide">
                <tr>
                  <th className="px-6 py-3">Kode Kelas</th>
                  <th className="px-6 py-3">Nama Kelas</th>
                  <th className="px-6 py-3">Deskripsi</th>
                  <th className="px-6 py-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">KLS101</td>
                  <td className="px-6 py-4">Kelas Matematika</td>
                  <td className="px-6 py-4">Kelas untuk mempelajari matematika dasar.</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">KLS102</td>
                  <td className="px-6 py-4">Kelas Fisika</td>
                  <td className="px-6 py-4">Kelas untuk mempelajari dasar-dasar fisika.</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      Edit
                    </button>
                  </td>
                </tr>
                {/* Tambahkan kelas lainnya sesuai kebutuhan */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClassesPage;
