/* eslint-disable no-undef */
import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import pageTrackerAnalytics from './PageTracker';
import { useLocation } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../components/Home';
import Labels from '../components/Labels';

function App() {
  const { pathname, search } = useLocation();
  const analytics = useCallback(() => {
    pageTrackerAnalytics({ path: pathname, search: search, title: pathname.split('/')[1] });
  }, [pathname, search]);

  useEffect(() => {
    analytics();
  }, [analytics]);

  const { menu } = useSelector((state) => state.labelsStore);
  return (
    <>
      <Home />
      {menu === 2 ? <Labels /> : null}
    </>
  );
}

export default App;
