import Search from '../src/Components/Search';
import Results from '../src/Components/Results';

const App = () => {
  return (
    <>
      <header>
        <h1>Who Is My Representative?</h1>
      </header>
      <main>
        <Search />
        <Results />
      </main>
    </>
  )
}

export default App;
