import { useState, useEffect } from 'react';

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
            <div key={politician.name} className='single-result'>
              <div>
                <a href={politician.link} rel='politician-site-link'>
                  <span>{politician.name}</span>
                </a>
              </div>
              <div className='state'>
                <span>State: {politician.state}</span>
              </div>
              <div className='party'>
                <span>Party: {politician.party}</span>
              </div>
              <div className='phone-number'>
                <span>Phone: {politician.phone}</span>
              </div>
              <div className='office'>
                <span>Office: {politician.office}</span>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Results;
