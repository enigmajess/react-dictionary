import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <audio controls key={props.phonetic.audio}>
        <source src={props.phonetic.audio} />
      </audio>
      <br />
      <p>{props.phonetic.text}</p>
    </div>
  );
}
