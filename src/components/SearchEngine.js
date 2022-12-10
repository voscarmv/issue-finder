import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLabels } from '../actions';

export const SearchEngine = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.reposStore);
  const { language } = useSelector((state) => state.issuesStore);

  useEffect(
    () => {
      const filteredRepolist = repos.reposlist.filter(
        (repo) =>
          repo.language.trim() === language ||
          repo.topics?.trim().toLowerCase().split(' ').includes(language.toLowerCase())
      );
      dispatch(getLabels(filteredRepolist, language));
    },
    // eslint-disable-next-line
    [repos]
  );
};
