import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to <code className="App-title">Issue Finder!</code>
        </p>
        <code>Coming Soon...</code>
        <br />
        <Button variant="dark"><a
          className="github-source"
          href="https://github.com/voscarmv/issue-finder"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Github
        </a></Button>
       
      </header>
    </div>
  );
}

export default App;
