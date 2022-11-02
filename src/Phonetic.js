import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <audio controls>
        <source src={props.phonetic.audio} />
      </audio>
      <br />
      <p>{props.phonetic.text}</p>
    </div>
  );
}
