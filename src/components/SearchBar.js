import React, {useState} from "react";

export const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (e) => {
    setTerm(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSearchSubmit(term);
  }

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="search-input">Video Search</label>
          <input
            type="text"
            className="ui"
            value={term}
            id="search-input"
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  )
}
