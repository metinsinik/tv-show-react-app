import { useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import SearchBox from "./Components/SearchBox";
import SearchResultContainer from "./Components/SearchResultContainer";

function App() {
  const [results, setResults] = useState([]);

  const search = async (value) => {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
    const series = await response.json();
    setResults(series);
  };

  const onSearch = (value) => {
    search(value);
  };
  
  return (
    <div className="App">
      <div style={{background: "rgb(76 77 78)"}}>
        <SearchBox onSearch={onSearch}></SearchBox>
      </div>
      <div>
        <SearchResultContainer results={results}></SearchResultContainer>
      </div>
    </div>
  );
}

export default App;
