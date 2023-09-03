import React from "react";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data";
import SearchBar from "../components/SearchBar";

function ArchivesPage() {
  const archivedNotes = getArchivedNotes();

  const [keyword, setKeyword] = React.useState("");

  function handleKeywordChange(newKeyword) {
    setKeyword(newKeyword);
  }

  const filteredNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div>
      <h2>Catatan Arsip</h2>
      <div className="search-bar">
        <SearchBar keyword={keyword} keywordChange={handleKeywordChange} />
      </div>
      {filteredNotes.length === 0 ? <p className="notes-list-empty">Arsip kosong.</p> : <NoteList notes={filteredNotes} />}
    </div>
  );
}

export default ArchivesPage;
