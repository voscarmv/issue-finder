import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions';
import { SearchEngine } from './SearchEngine';
import { Select, Option } from '@material-tailwind/react';
import { Line } from 'rc-progress';
import Button from 'react-bootstrap/Button';
import { VscGithub } from 'react-icons/vsc';
import {
  addToSelectedLabels,
  epmtySelectedLabel,
  epmtyIssuesList,
  toggleLabelList,
  setLanguage
} from '../actions';

const Home = () => {
  const [label, setLabel] = useState('Good First Issue');
  const [lang, setLang] = useState('JavaScript');
  const [darkMode, setDarkMode] = useState(false);

  function changeDarkMode() {
    setDarkMode(!darkMode);
  }

  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getRepos());
    },
    // eslint-disable-next-line
    []
  );
  const { loading, loadingPercentage, menu } = useSelector((state) => state.labelsStore);
  const { issuesList } = useSelector((state) => state.issuesStore);
  function findIssues() {
    if (label === 'All') {
      dispatch(epmtyIssuesList());
      dispatch(epmtySelectedLabel());
      dispatch(toggleLabelList(1));
    } else {
      dispatch(toggleLabelList(2));
      dispatch(epmtyIssuesList());
      dispatch(epmtySelectedLabel());
      dispatch(addToSelectedLabels(label));
    }
    dispatch(setLanguage(lang));
  }

  return (
    <div className="App sticky top-0 z-50">
      <header
        className="App-header left-0 right-0 top-0 z-[2]"
        style={{
          minHeight: issuesList || menu === 2 ? '10vh' : '100vh',
          backgroundColor: darkMode ? 'white' : '#08070b',
          color: darkMode ? 'black' : 'white'
        }}>
        <div className="absolute top-8 right-8" onClick={changeDarkMode}>
          <span
            className="material-icons cursor-pointer"
            style={{ color: darkMode ? 'black' : 'white' }}>
            {darkMode ? 'dark' : 'light'}_mode
          </span>
        </div>
        <p
          style={{
            display: issuesList ? 'none' : 'block'
          }}
          className="">
          Welcome to{' '}
        </p>
        <div
          style={{
            paddingTop: issuesList ? '12px' : ''
          }}
          className="flex flex-row justify-between">
          <code className="space-x-2 font-bold">
            Issue
            <a
              className=""
              href="https://github.com/voscarmv/issue-finder"
              target="_blank"
              aria-label="Github"
              rel="noopener noreferrer">
              <VscGithub className="git-icon" style={{ color: darkMode ? 'black' : '#ffffffb3' }} />
            </a>
            Finder
          </code>
        </div>
        <em
          style={{
            display: issuesList ? 'none' : 'block'
          }}
          className={`my-4 mt-3 text-sm rounded-1 w-80 text-${darkMode ? 'black' : 'white'}`}>
          Best Open Source issue locator for busy Devs!
        </em>
        {menu === 2 ? (
          <>
            <SearchEngine />
            <Line
              percent={loading ? loadingPercentage : 100}
              strokeWidth={1.5}
              trailWidth={1.5}
              className="mx-4 my-4"
              strokeColor="#FF10F0"
            />
            {loading ? <code className="my-4">Loading...</code> : null}
          </>
        ) : null}
        <div className="flex flex-col gap-10 my-4 space-y-1 sm:gap-4 sm:items-end sm:flex-row">
          <Select
            variant="static"
            label="Label"
            title="Issue label"
            className={`text-${darkMode ? 'black' : 'white'}`}
            selected={(ele) => (ele ? ele.props.children : label)}
            disabled={loading}
            onChange={(label) => setLabel(label)}>
            <Option value="Good First Issue">Good First Issue</Option>
            <Option value="chore">Chore</Option>
            <Option value="Documentation">Documentation</Option>
            <Option value="Bug">Bug</Option>
            <Option value="Help Wanted">Help Wanted</Option>
            <Option value="Question">Question</Option>
            <Option value="All">All</Option>
          </Select>
          <Button
            variant={`${darkMode ? 'light' : 'dark'} button button-green w-full h-15`}
            disabled={loading || (menu === 2 && label === 'All')}
            onClick={() => findIssues()}>
            {label === 'All' ? 'Load Labels' : 'Find Issues'}
          </Button>
          <Select
            variant="static"
            label="Language / Framework"
            title="Language / Framework"
            className={`text-${darkMode ? 'black' : 'white'}`}
            selected={(ele) => (ele ? ele.props.children : lang)}
            onChange={(language) => setLang(language)}>
            <Option value="javascript">JavaScript</Option>
            <Option value="react">React</Option>
            <Option value="vuejs">Vuejs</Option>
            <Option value="ruby">Ruby</Option>
            <Option value="rails">Rails</Option>
            <Option value="typescript">TypeScript</Option>
            <Option value="firebase">Firebase</Option>
            <Option value="java">Java</Option>
            <Option value="python">Python</Option>
            <Option value="c++">C++</Option>
          </Select>
        </div>
      </header>
    </div>
  );
};

export default Home;
