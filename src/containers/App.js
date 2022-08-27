import { useSelector } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../components/Home';
import Labels from '../components/Labels';
import Issues from '../components/Issues';

function App() {
  const { menu } = useSelector((state) => state.labelsStore);
  const { issuesList } = useSelector((state) => state.issuesStore);
  return (
    <>
      <Home />
      {menu === 2 ? <Labels /> : null}
      {issuesList ? <Issues /> : null}
    </>
  );
}

export default App;
