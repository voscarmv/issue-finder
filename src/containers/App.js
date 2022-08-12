import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRepos } from '../actions'
import { SearchEngine } from './searchEngine';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const dispatch = useDispatch()
  console.log(process.env.REACT_APP_API_KEY)
  useEffect(() => {
      dispatch(getRepos());
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to <code className="App-title">Issue Finder!</code>
        </p>
        <br></br>
        <br></br>
        <br></br>
        < SearchEngine />
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
