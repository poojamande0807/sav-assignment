import React, { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";
import LoadButton from "./components/LoadButton";
import { mockData } from "./mockData";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setItems(mockData);
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <LoadButton />
      <SearchBar setSearchQuery={setSearchQuery} />
      <ItemList
        items={filteredItems}
        page={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
