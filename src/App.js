import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        Dictionary Search Engine
      </header>
      <Dictionary defaultKeyword = "Cat" />
      </div>
      <footer className='App-footer'>
      <span>Coded by Jessica Neumann | Open sourced on </span>  
        <a href='https://github.com/enigmajess/react-dictionary' target="_blank">Github</a> 
        <span> and hosted on </span> 
        <a href='https://visionary-granita-bf948b.netlify.app' target="_blank">Netlify.</a>
      </footer>
    </div>
  );
}

export default App;
