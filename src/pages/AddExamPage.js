import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi setelah submit
import Sidebar from "../components/Sidebar";

const AddExamPage = () => {
  const [kodeUjian, setKodeUjian] = useState("");
  const [namaUjian, setNamaUjian] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [durasi, setDurasi] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasikan pengiriman data
    console.log("Ujian Ditambahkan:", { kodeUjian, namaUjian, tanggal, durasi });

    // Navigasi kembali ke halaman daftar ujian
    navigate("/exams");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Tambah Ujian</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
          <div>
            <label htmlFor="kodeUjian" className="block text-sm font-medium text-gray-700">
              Kode Ujian
            </label>
            <input
              type="text"
              id="kodeUjian"
              value={kodeUjian}
              onChange={(e) => setKodeUjian(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="namaUjian" className="block text-sm font-medium text-gray-700">
              Nama Ujian
            </label>
            <input
              type="text"
              id="namaUjian"
              value={namaUjian}
              onChange={(e) => setNamaUjian(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">
              Tanggal Ujian
            </label>
            <input
              type="date"
              id="tanggal"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="durasi" className="block text-sm font-medium text-gray-700">
              Durasi Ujian (Menit)
            </label>
            <input
              type="number"
              id="durasi"
              value={durasi}
              onChange={(e) => setDurasi(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Simpan Ujian
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddExamPage;
