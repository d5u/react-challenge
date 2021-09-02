import { useState, useEffect } from 'react';

const Results = ({ representatives, senators }) => {
  let [results, setResults] = useState([]);

  useEffect(() => {
    if (representatives.length > 0) setResults(representatives);
    if (senators > 0) setResults(senators);
  }, [representatives, senators])

  return (
    <div>
      <h2>Results</h2>
      <div className="results-container">
        {
          results.map(r => {
            return <div>{r.name}</div>
          })
        }
      </div>
    </div>
  )
}

export default Results;
