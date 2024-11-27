import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi setelah submit
import Sidebar from "../components/Sidebar";

const AddReportGradePage = () => {
  const [namaSiswa, setNamaSiswa] = useState("");
  const [mataPelajaran, setMataPelajaran] = useState("");
  const [nilai, setNilai] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasikan pengiriman data
    console.log("Laporan Nilai Ditambahkan:", { namaSiswa, mataPelajaran, nilai });

    // Navigasi kembali ke halaman daftar laporan nilai
    navigate("/report-grades");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Tambah Laporan Nilai</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
          <div>
            <label htmlFor="namaSiswa" className="block text-sm font-medium text-gray-700">
              Nama Siswa
            </label>
            <input
              type="text"
              id="namaSiswa"
              value={namaSiswa}
              onChange={(e) => setNamaSiswa(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="mataPelajaran" className="block text-sm font-medium text-gray-700">
              Mata Pelajaran
            </label>
            <input
              type="text"
              id="mataPelajaran"
              value={mataPelajaran}
              onChange={(e) => setMataPelajaran(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="nilai" className="block text-sm font-medium text-gray-700">
              Nilai
            </label>
            <input
              type="number"
              id="nilai"
              value={nilai}
              onChange={(e) => setNilai(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Simpan Laporan Nilai
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddReportGradePage;
