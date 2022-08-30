import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLabels } from '../actions';

export const SearchEngine = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.reposStore);

  useEffect(
    () => {
      dispatch(getLabels(repos.reposlist));
    },
    // eslint-disable-next-line
    [repos]
  );
};
