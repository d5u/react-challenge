import { useState, useEffect } from 'react';

const Results = ({ representatives, senators }) => {
  let [results, setResults] = useState([]);

  useEffect(() => {
    representatives.length > 0 ? setResults(representatives) : setResults(senators);
  }, [representatives, senators])

  

  return (
    <div>
      <h2>Results</h2>
      <div className="results-container">
        {
          results.map(r => 
            <div key={r.name}>{r.name}</div>
          )
        }
      </div>
    </div>
  )
}

export default Results;
