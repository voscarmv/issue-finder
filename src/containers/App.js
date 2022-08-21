import { useSelector } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../components/Home';
import Labels from '../components/Labels';
import Issues from '../components/Issues';

function App() {
  const { menu } = useSelector((state) => state.labelsStore);
  return (
    <>
      <Home />
      {menu === 2 ? <Labels /> : null}
      <Issues />
    </>
  );
}

export default App;
