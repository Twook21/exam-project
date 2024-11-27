import React from "react";
import Sidebar from "../../components/Sidebar"; 


const AdminPage = () => {
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
      <div className="flex-1 flex flex-col">

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Card 1: Total Kelas */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold">Total Kelas</h2>
              <p className="mt-2 text-4xl font-bold">15</p>
              <div className="mt-4 text-sm text-blue-200">
                +3% from last week
              </div>
            </div>

            {/* Card 2: Total Siswa */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold">Total Siswa</h2>
              <p className="mt-2 text-4xl font-bold">300</p>
              <div className="mt-4 text-sm text-green-200">
                +5% from last month
              </div>
            </div>

            {/* Card 3: Total Ujian */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold">Total Ujian</h2>
              <p className="mt-2 text-4xl font-bold">50</p>
              <div className="mt-4 text-sm text-yellow-200">
                +10% from last month
              </div>
            </div>

            {/* Card 4: Total Sesi Ujian */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold">Total Sesi Ujian</h2>
              <p className="mt-2 text-4xl font-bold">10</p>
              <div className="mt-4 text-sm text-red-200">
                -2% compared to last week
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="mt-8 bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Kelas, Siswa, Ujian, dan Sesi Ujian
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-600">
                <thead className="bg-gray-50 text-gray-800 font-medium uppercase tracking-wide">
                  <tr>
                    <th className="px-6 py-3">Kelas</th>
                    <th className="px-6 py-3">Siswa</th>
                    <th className="px-6 py-3">Ujian</th>
                    <th className="px-6 py-3">Sesi Ujian</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">Kelas 1</td>
                    <td className="px-6 py-4">30</td>
                    <td className="px-6 py-4">Ujian Matematika</td>
                    <td className="px-6 py-4">Sesi 1</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">Kelas 2</td>
                    <td className="px-6 py-4">25</td>
                    <td className="px-6 py-4">Ujian Fisika</td>
                    <td className="px-6 py-4">Sesi 2</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">Kelas 3</td>
                    <td className="px-6 py-4">35</td>
                    <td className="px-6 py-4">Ujian Kimia</td>
                    <td className="px-6 py-4">Sesi 3</td>
                  </tr>
                  {/* Tambahkan data lainnya sesuai kebutuhan */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
