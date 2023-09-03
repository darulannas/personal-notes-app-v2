import React from "react";
import PropTypes from "prop-types";
import { FiDownload, FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <Link to="/">
      <button className="action" onClick={() => onArchive(id)}>
        {archived ? <FiUpload /> : <FiDownload />}
      </button>
    </Link>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
