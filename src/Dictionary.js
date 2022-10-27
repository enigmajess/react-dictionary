import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyWord, setKeyword] = useState("");

    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyWord}`)
    }
    return <div className="Dictionary">
       
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} placeholder="Search" autoFocus={true} />
        </form>
    </div>;
}