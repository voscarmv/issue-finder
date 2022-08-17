import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLabels } from '../actions';

export const SearchEngine = () => {
  const dispatch = useDispatch();
  // const labels = useSelector((state) => state.labelsStore);
  const repos = useSelector((state) => state.reposStore);
  console.log(`from searchengine ${JSON.stringify(repos)}`);
  // console.log(process.env.REACT_APP_API_KEY)
  useEffect(
    () => {
      dispatch(getLabels(repos.reposlist));
    },
    // eslint-disable-next-line
    [repos]
  );
  // return (
  //   <div>
  //       {JSON.stringify(labels)}
  //   </div>
  // );
};
