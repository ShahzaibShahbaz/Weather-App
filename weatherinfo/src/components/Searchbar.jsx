import React from "react";

const SearchBar = ({ city, setCity, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="flex gap-12">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="w-96 bg-transparent border-2 border-black text-black font-mono font-bold px-4"
        />
        <button className="ml-12 border-2 border-black px-12" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
