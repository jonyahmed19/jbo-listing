import "./App.scss";
import data from "./data.json";
import Header from "./components/Header.component";
import Jobs from "./components/Jobs.component";
import React, { useState } from "react";

const App = () => {
  const [filterKeywords, setFilterKeywords] = useState([]);

  const addFilterKeywords = (datas) => {
    if (!filterKeywords.includes(datas)) {
      setFilterKeywords([...filterKeywords, datas]);
    }
  };
  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key != data);
    setFilterKeywords(newKeywords);
  };

  const clearKeywords = () => {
    setFilterKeywords([]);
  };

  return (
    <div className="app">
      <header></header>
      {filterKeywords.length > 0 && (
        <Header
          clearKeywords={clearKeywords}
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
        />
      )}
      <Jobs
        words={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
};

export default App;
