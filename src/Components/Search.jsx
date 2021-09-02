import states from '../data/states.json';

const Search = () => {
  return (
    <div>
      <h4>State:</h4>
      <select name="states">
        {
          states.map(state => 
            <option key={state.abbreviation}>{state.name}</option>)
        }
      </select>
      <h4>Type:</h4>
      <select name="type">
        <option value='rep'>Representatives</option>
        <option value='sen'>Senators</option>
      </select>
      <button>Search</button>
    </div>
  )
}

export default Search;
