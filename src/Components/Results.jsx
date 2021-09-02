import { useState, useEffect } from 'react';

import SingleResult from './SingleResult';

const Results = ({ representatives, senators }) => {
  let [results, setResults] = useState([]);

  useEffect(() => {
    representatives.length > 0 ? setResults(representatives) : setResults(senators);
  }, [representatives, senators])

  return (
    <div className='results-container'>
      <h2>
        {representatives.length > 0
          ? `Showing results for representatives in ${representatives[0].state}`
          : senators.length > 0
          ? `Showing results for senators in ${senators[0].state}`
          : 'Click search to find out!'
        }
      </h2>
      <div className='results-container'>
        {
          results.map(politician => 
            <SingleResult politician={politician} />
          )
        }
      </div>
    </div>
  )
}

export default Results;
