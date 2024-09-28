import logo from './logo.svg';
import './App.css';

const defaultTasks = [
  {
    id: crypto.randomUUID(),
    title: 'Take out the trash',
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Do laundry',
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Go to MHacks',
    completed: true,
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
