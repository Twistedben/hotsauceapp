import React from 'react';

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
    const BarStyling = { color: 'red', width: "20rem", background: "orange", border: "2px solid red", padding: "0.5rem", width: "auto" };
    return (
        <input
            style={BarStyling}
            key="random1"
            value={keyword}
            placeholder={"search country"}
            onChange={(e) => setKeyword(e.target.value)}
        />
    );
}

export default SearchBar
