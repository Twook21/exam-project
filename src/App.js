import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminPage from "./pages/admin/AdminPage";
import DosenPage from "./pages/dosen/DosenPage";
import MahasiswaPage from "./pages/mahasiswa/MahasiswaPage";
import SubjectsPage from "./pages/SubjectsPage";
import AddSubjectsPage from "./pages/AddSubjectsPage";
import ClassesPage from "./pages/ClassesPage";
import AddClassPage from "./pages/AddClassPage";
import StudentsPage from "./pages/StudentsPage";
import AddStudentPage from "./pages/AddStudentPage";
import ExamsPage from "./pages/ExamsPage";
import AddExamPage from "./pages/AddExamPage";
import SessionExamPage from "./pages/SessionExamPage";
import AddSessionExamPage from "./pages/AddSessionExamPage";
import ReportGradePage from "./pages/ReportGradePage";
import AddReportGradePage from "./pages/AddReportGradePage";
import users from "./data/Users";
import Checkbox from "./components/Checkbox";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/subjects/add" element={<AddSubjectsPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/classes/add" element={<AddClassPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/students/add" element={<AddStudentPage />} />
        <Route path="/exams" element={<ExamsPage />} />
        <Route path="/exams/add" element={<AddExamPage />} />
        <Route path="/session-exams" element={<SessionExamPage />} />
        <Route path="/session-exams/add" element={<AddSessionExamPage />} />
        <Route path="/report-grades" element={<ReportGradePage />} />
        <Route path="/report-grades/add" element={<AddReportGradePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dosen" element={<DosenPage />} />
        <Route path="/mahasiswa" element={<MahasiswaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
