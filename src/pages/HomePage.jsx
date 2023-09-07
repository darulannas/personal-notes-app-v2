import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/local-data";
import { Link } from "react-router-dom";
import AddButton from "../components/AddButton";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(newKeyword) {
    setSearchParams({ keyword: newKeyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    return (
      <section>
        <h2>Catatan Aktif</h2>
        <div className="search-bar">
          <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        </div>
        <NoteList notes={notes} />
        <div className="homepage__action">
          <Link to="/notes/new">
            <AddButton />
          </Link>
        </div>
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
