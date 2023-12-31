// import React from "react";
// import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";
// import NoteDetail from "../components/NoteDetail";
// import { deleteNote, getNote, archiveNote, unarchiveNote } from "../utils/local-data";

// function DetailPageWrapper() {
//   const { id } = useParams();
//   return <NoteDetailPage id={id} />;
// }

// class NoteDetailPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       note: getNote(props.id),
//     };

//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     this.onArchiveHandler = this.onArchiveHandler.bind(this);
//   }

//   onDeleteHandler(id) {
//     deleteNote(id);
//   }

//   onArchiveHandler(id) {
//     const { note } = this.state;
//     if (note.archived) {
//       unarchiveNote(id);
//     } else {
//       archiveNote(id);
//     }

//     this.setState({
//       note: { ...note, archived: !note.archived },
//     });
//   }

//   render() {
//     // if (this.state.note === null) {
//     if (!this.state.note) {
//       return <p>Note is not found!</p>;
//     }

//     return (
//       <section>
//         <NoteDetail {...this.state.note} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
//       </section>
//     );
//   }
// }

// NoteDetailPage.propTypes = {
//   id: PropTypes.string.isRequired,
// };

// export default DetailPageWrapper;

import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { deleteNote, getNote, archiveNote, unarchiveNote } from "../utils/local-data";

function NoteDetailPage() {
  const { id } = useParams();
  const [note, setNote] = React.useState(null);

  React.useEffect(() => {
    const noteData = getNote(id);
    setNote(noteData);
  }, [id]);

  const onDeleteHandler = (id) => {
    deleteNote(id);
  };

  const onArchiveHandler = (id) => {
    if (note && note.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }

    setNote((prevNote) => ({
      ...prevNote,
      archived: !prevNote.archived,
    }));
  };

  if (!note) {
    return <p>Note is not found!</p>;
  }

  return (
    <section>
      <NoteDetail {...note} onDelete={() => onDeleteHandler(id)} onArchive={() => onArchiveHandler(id)} />
    </section>
  );
}

export default NoteDetailPage;
