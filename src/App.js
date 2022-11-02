import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        Dictionary Search Engine
      </header>
      <Dictionary defaultKeyword = "Feline" />
      </div>
      <footer className='App-footer'>
        Coded by Jessica Neumann
      </footer>
    </div>
  );
}

export default App;
