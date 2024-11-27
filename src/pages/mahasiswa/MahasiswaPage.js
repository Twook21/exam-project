import React, { useEffect } from 'react';

const MahasiswaPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || user.role !== 'mahasiswa') {
      window.location.href = '/'; 
    }
  }, [user]);

  
  if (!user) {
    return null; 
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome, Mahasiswa {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default MahasiswaPage;