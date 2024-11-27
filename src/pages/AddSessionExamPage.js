import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi setelah submit
import Sidebar from "../components/Sidebar";

const AddSessionExamPage = () => {
  const [kodeSesi, setKodeSesi] = useState("");
  const [kodeUjian, setKodeUjian] = useState("");
  const [waktuMulai, setWaktuMulai] = useState("");
  const [durasi, setDurasi] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasikan pengiriman data
    console.log("Sesi Ujian Ditambahkan:", { kodeSesi, kodeUjian, waktuMulai, durasi });

    // Navigasi kembali ke halaman daftar sesi ujian
    navigate("/session-exams");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Tambah Sesi Ujian</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
          <div>
            <label htmlFor="kodeSesi" className="block text-sm font-medium text-gray-700">
              Kode Sesi
            </label>
            <input
              type="text"
              id="kodeSesi"
              value={kodeSesi}
              onChange={(e) => setKodeSesi(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

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
            <label htmlFor="waktuMulai" className="block text-sm font-medium text-gray-700">
              Waktu Mulai
            </label>
            <input
              type="datetime-local"
              id="waktuMulai"
              value={waktuMulai}
              onChange={(e) => setWaktuMulai(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="durasi" className="block text-sm font-medium text-gray-700">
              Durasi (Menit)
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
              Simpan Sesi Ujian
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddSessionExamPage;
