import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyWord, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);


  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response){
    setPhotos(response.data.photos)
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search()

    const pexelsApiKey= "563492ad6f91700001000001e674cbfce1224fe3a54e58055a478a90";
    let pexelsApiURL = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`
    axios.get(pexelsApiURL, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

 if (loaded) {
    return (
        <div className="Dictionary">
          <section>
            <h2>What do you want to search?</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleKeywordChange}
                placeholder="Cat"
                autoFocus={true}
              />
            </form>
          </section>
          <Results results={results} />
          <Photos photos={photos} />
        </div>
      );
    } else {
        load();
        return "Loading"
    }
 }
