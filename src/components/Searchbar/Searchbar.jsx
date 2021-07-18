import React, { useState } from "react";
import PropTypes, { func } from "prop-types";
import { toast } from "react-toastify";
import {
  SearchHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from "./Searchbar.styles";

function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchName.trim() === "") {
      toast.error("Enter search query");
      return;
    }
    onSubmit(searchName);
    setSearchName("");
  };

  return (
    <SearchHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          value={searchName}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={(e) => setSearchName(e.currentTarget.value.toLowerCase())}
        />
      </SearchForm>
    </SearchHeader>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
