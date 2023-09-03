import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../src/components/Navigation";
import HomePage from "../src/pages/HomePage";
import ArchivesPage from "../src/pages/ArchivesPage";
import NoteDetailPage from "../src/pages/NoteDetailPage";
import AddPage from "./pages/AddPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app-container">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/notes/:id" element={<NoteDetailPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
