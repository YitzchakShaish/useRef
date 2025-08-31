import React from "react";

export default function TextBox({ placeholder, inputRef }) {
    return <input type="text" placeholder={placeholder} onChange={(e) => inputRef(e.target.value)} />;
}



