import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getIssues } from '../actions'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIssues("chatwoot","chatwoot","good first issue"))
  })
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
