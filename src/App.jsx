import axios from 'axios';

import Search from '../src/Components/Search';
import Results from '../src/Components/Results';

const App = () => {
  let [reps, setReps] = useState('');
  let [sens, setSens] = useState('');

  const fetchData = (state, type) => {
    switch (type) {
      case 'rep':
        axios.get(`http://localhost:3001/representatives/${state}`)
          .then(({ data }) => console.log(data))
          .catch(err => console.log('Request to representatives API endpoint failed with ' + err));
      break;
      case 'sen':
        axios.get(`http://localhost:3001/senators/${state}`)
          .then(({ data }) => console.log(data))
          .catch(err => console.log('Request to senators API endpoint failed with ' + err))
        break;
      default:
        console.log('Missing type');
    }
  }


  return (
    <>
      <header>
        <h1>Who Is My Representative?</h1>
      </header>
      <main>
        <Search fetchData={fetchData} />
        <Results />
      </main>
    </>
  )
}

export default App;
