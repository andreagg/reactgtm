import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Componente Home
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/results">Go to Results</Link>
    </div>
  );
}

// Componente Results
function Results(props) {
  const { pms } = props;
  return (
    <div>
      <h1>Results Page</h1>
      {JSON.stringify(pms)}
      <Link to="/">Go to Home</Link>
    </div>
  );
}

function App() {
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    if (window.queryParams) {
      setQueryParams(window.queryParams);
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    Object.keys(queryParams).forEach((key) => {
      url.searchParams.set(key, queryParams[key]);
    });
    window.history.replaceState({}, "", url);
  }, [queryParams]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results pms={queryParams} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
