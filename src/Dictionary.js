import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyWord, setKeyword] = useState("");

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function handleResponse(response) {
        console.log(response.data[0])
    }

    function search(event) {
        event.preventDefault();
        

        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
        axios.get(apiUrl).then(handleResponse);
    }
    return <div className="Dictionary">
       
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} placeholder="Search" autoFocus={true} />
        </form>
    </div>;
}