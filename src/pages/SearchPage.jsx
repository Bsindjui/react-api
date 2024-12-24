import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function SearchPage() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=59a491c2939460d6f8396b5a10d5c597"
        );
        setItems(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-page">
      <h1>Search for Movies</h1>
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="item-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="item-card">
            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
