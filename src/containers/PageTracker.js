import { GA4React } from 'ga-4-react';

const ga4react = new GA4React(process.env.REACT_APP_MEASUREMENTID).initialize();

export const ANALYTICSDATA = {
  path: '',
  search: '',
  title: ''
};

const pageTrackerAnalytics = (state = ANALYTICSDATA) => {
  const { path, search, title } = state;
  ga4react
    .then((ga) => {
      ga.pageview(path, search, title);
    })
    .catch((err) => console.error(`Analytics failed: ${err}`));
};

export default pageTrackerAnalytics;
