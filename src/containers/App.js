import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions'
import { SearchEngine } from './searchEngine';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Line } from 'rc-progress';

function App() {
  const dispatch = useDispatch()
  console.log(process.env.REACT_APP_API_KEY)
  useEffect(() => {
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
        <p>
          Welcome to <code className="App-title">Issue Finder!</code>
        </p>
        <br></br>
        <SearchEngine />
        <Line percent={loading ? loadingPercentage : 100} strokeWidth={1.5} trailWidth={1.5} className="mx-4" strokeColor="#FF10F0" />
        <br></br>
        {loading ? <code>Loading...</code> : null}
        <em className='text-sm text-success w-80 mt-3'>"The function of Issue Finder is to search for skill appropriate, current Open Source Repositories that make your contributions stand out from other hires and YOU a must-have for hiring mangers!"</em>
        <br />
        <div className='flex justify-between space-x-2'>
          <div className="flex justify-center">
            <div>
              <div className="dropup relative">
                <button
                  className="
          dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                  type="button"
                  id="dropdownMenuButton1u"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Labels
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-up"
                    className="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                    ></path>
                  </svg>
                </button>
                <ul
                  className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                  aria-labelledby="dropdownMenuButton1u"
                >
                  <li>
                    <a
                      className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      href="#"
                    >Action</a
                    >
                  </li>
                  <li>
                    <a
                      className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      href="#"
                    >Another action</a
                    >
                  </li>
                  <li>
                    <a
                      className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      href="#"
                    >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Button variant="dark"><a
            className="github-source"
            href="https://github.com/voscarmv/issue-finder"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Github
          </a></Button>
          <div className="flex justify-center">
            <div>
              <div className="dropup relative">
                <button
                  className="
          dropdown-toggle
          px-6
          py-2.5
          bg-red-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                  type="button"
                  id="dropdownMenuButton1u"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filters
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-up"
                    className="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                    ></path>
                  </svg>
                </button>
                <ul
                  className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                  aria-labelledby="dropdownMenuButton1u"
                >
                  <li>
                    <a
                      className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      href="#"
                    >Action</a
                    >
                  </li>
                  <li>
                    <a
                      className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      href="#"
                    >Another action</a
                    >
                  </li>
                  <li>
                    <a
                      className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      href="#"
                    >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
