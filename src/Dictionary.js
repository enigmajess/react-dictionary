import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyWord, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search()

  
  }

  function load() {
    setLoaded(true);
    search();
  }

 if (loaded) {
    return (
        <div className="Dictionary">
          <section>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleKeywordChange}
                placeholder="Search"
                autoFocus={true}
              />
            </form>
          </section>
          <Results results={results} />
        </div>
      );
    } else {
        load();
        return "Loading"
    }
 }
