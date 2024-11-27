import React, { useEffect } from 'react';

const DosenPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    // Cek apakah user ada dan memiliki role 'dosen'
    if (!user || user.role !== 'dosen') {
      window.location.href = '/'; // Redirect ke halaman beranda jika tidak
    }
  }, [user]);

  // Jika user tidak ada, kita tidak akan merender komponen ini
  if (!user) {
    return null; // Atau bisa juga menampilkan loading spinner
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome, Dosen {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default DosenPage;