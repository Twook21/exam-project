import React from "react";
import { Link } from "react-router-dom"; // Import Link untuk navigasi
import Sidebar from "../components/Sidebar";

const SessionExamPage = () => {
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
          <h1 className="text-2xl font-semibold">Sesi Ujian</h1>
          {/* Tombol Tambah Sesi Ujian */}
          <Link
            to="/session-exams/add" // Arahkan ke halaman tambah sesi ujian
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Tambah Sesi Ujian
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Total Sesi Ujian */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Total Sesi Ujian</h2>
            <p className="mt-2 text-4xl font-bold">5</p>
            <div className="mt-4 text-sm text-blue-200">
              +2% from last week
            </div>
          </div>

          {/* Card 2: Sesi Ujian Terbaru */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Sesi Ujian Terbaru</h2>
            <p className="mt-2 text-4xl font-bold">Sesi Ujian Matematika</p>
            <div className="mt-4 text-sm text-green-200">
              New session scheduled
            </div>
          </div>

          {/* Card 3: Sesi Ujian Terpopuler */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Sesi Ujian Terpopuler</h2>
            <p className="mt-2 text-4xl font-bold">Sesi Ujian Bahasa Indonesia</p>
            <div className="mt-4 text-sm text-yellow-200">
              Most attended this semester
            </div>
          </div>
        </div>

        {/* Table Section: Daftar Sesi Ujian */}
        <div className="mt-8 bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              Daftar Sesi Ujian
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-50 text-gray-800 font-medium uppercase tracking-wide">
                <tr>
                  <th className="px-6 py-3">Kode Sesi</th>
                  <th className="px-6 py-3">Ujian</th>
                  <th className="px-6 py-3">Waktu Mulai</th>
                  <th className="px-6 py-3">Durasi</th>
                  <th className="px-6 py-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">SJS001</td>
                  <td className="px-6 py-4">Ujian Matematika</td>
                  <td className="px-6 py-4">2024-12-10 09:00</td>
                  <td className="px-6 py-4">90 Menit</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">SJS002</td>
                  <td className="px-6 py-4">Ujian Bahasa Indonesia</td>
                  <td className="px-6 py-4">2024-12-15 10:00</td>
                  <td className="px-6 py-4">120 Menit</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      Edit
                    </button>
                  </td>
                </tr>
                {/* Tambahkan sesi ujian lainnya sesuai kebutuhan */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SessionExamPage;
