import { useState } from 'react';
import states from '../data/states.json';

const Search = ({ fetchData }) => {
  let [state, setState] = useState('AL');
  let [type, setType] = useState('rep');

  return (
    <div>
      <h4>State:</h4>
      <select value={state} onChange={e => setState(e.target.value)}>
        {
          states.map(state => 
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>)
        }
      </select>
      <h4>Type:</h4>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value='rep'>Representatives</option>
        <option value='sen'>Senators</option>
      </select>
      <button onClick={e => {fetchData(state, type)}}>Search</button>
    </div>
  )
}

export default Search;
