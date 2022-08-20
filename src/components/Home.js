import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions';
import { SearchEngine } from './SearchEngine';
import { Select, Option } from '@material-tailwind/react';
import { Line } from 'rc-progress';
import Button from 'react-bootstrap/Button';
import { VscGithub } from 'react-icons/vsc';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getRepos());
    },
    // eslint-disable-next-line
    []
  );
  const { loading, loadingPercentage } = useSelector((state) => state.labelsStore);

  // need to update percentage of loading bar
  return (
    <div className="App">
      <header className="App-header">
        <p className="">Welcome to </p>
        <div className="flex flex-row justify-between">
          <code className="space-x-2">
            Issue
            <a
              className=""
              href="https://github.com/voscarmv/issue-finder"
              target="_blank"
              rel="noopener noreferrer">
              <VscGithub className="git-icon" />
            </a>
            Finder
          </code>
        </div>
        <em className="my-4 mt-3 text-sm text-white rounded-1 w-80">
          Best Open Source issue locator for busy Devs!
        </em>
        <SearchEngine />
        <Line
          percent={loading ? loadingPercentage : 100}
          strokeWidth={1.5}
          trailWidth={1.5}
          className="mx-4 my-4"
          strokeColor="#FF10F0"
        />
        {loading ? <code className="my-4">Loading...</code> : null}
        <div className="flex items-end gap-3 my-4">
          <Select
            variant="static"
            label="Label"
            selected={(ele) => (ele ? ele.props.children : 'Good First Issue')}>
            <Option>Good First Issue</Option>
            <Option>Documentation</Option>
            <Option>Bug</Option>
            <Option>Help Wanted</Option>
            <Option>Question</Option>
            <Option>All</Option>
          </Select>
          <Button variant="dark button button-green text-primary w-full h-15"> Find Issues</Button>
          <Select
            variant="static"
            label="Filter"
            selected={(ele) => (ele ? ele.props.children : 'Both')}>
            <Option>Language Ruby</Option>
            <Option>Language JavaScript</Option>
            <Option>Both</Option>
          </Select>
        </div>
      </header>
    </div>
  );
};

export default Home;
