import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi setelah submit
import Sidebar from "../components/Sidebar";

const AddClassPage = () => {
  const [kode, setKode] = useState("");
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasikan pengiriman data
    console.log("Kelas Ditambahkan:", { kode, nama, deskripsi });

    // Navigasi kembali ke halaman daftar kelas
    navigate("/classes");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Tambah Kelas</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
          <div>
            <label htmlFor="kode" className="block text-sm font-medium text-gray-700">
              Kode Kelas
            </label>
            <input
              type="text"
              id="kode"
              value={kode}
              onChange={(e) => setKode(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
              Nama Kelas
            </label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700">
              Deskripsi
            </label>
            <textarea
              id="deskripsi"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate("/classes")}
              className="text-gray-600 hover:text-gray-800"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Tambah
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddClassPage;
