import { Link, Outlet } from "react-router-dom";
import { AiOutlineFolderOpen, AiOutlineCompress, AiFillBulb, AiOutlineCloudSync, AiOutlineRead, AiOutlineEdit } from "react-icons/ai";

function App() {
  return (
    <div>
      <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <aside
          class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-indigo-500"
        >
          <div class="sidebar-header flex items-center justify-center py-4">
            <div class="inline-flex">
              <a href="#" class="inline-flex flex-row items-center">
                <svg class="w-10 h-10 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">Dev ToolKit</span>
              </a>
            </div>
          </div>
          <div class="sidebar-content px-4 py-6">
            <ul class="flex flex-col w-full">
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                >
                  <span class="flex items-center justify-center text-lg text-gray-400">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                  <span class="ml-3">Dashboard</span>
                </a>
              </li>
              <li class="my-px">
                <span class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">Projects</span>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <AiOutlineCloudSync />
                  <span class="ml-3">
                    <Link to={`/mr/activity`} className="text-white no-underline">MR Activities</Link>
                  </span>
                </a>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <AiOutlineCompress />
                  <span class="ml-3">
                    <Link to={`/json-fmt`} className="text-white no-underline">JSON Formatter</Link>
                  </span>
                </a>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <AiOutlineFolderOpen />
                  <span class="ml-3">
                    <Link to={`/reminder`} className="text-white no-underline">Custom Reminder</Link>
                  </span>
                  {/* <span */}
                  {/*   class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto" */}
                  {/* >1k</span> */}
                </a>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <AiOutlineRead />
                  <span class="ml-3">
                    <Link to={`/notes`} className="text-white no-underline">Your Notes</Link>
                  </span>
                </a>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <AiOutlineEdit />
                  <span class="ml-3">
                    <Link to={`/todo`} className="text-white no-underline">TODO</Link>
                  </span>
                </a>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <AiFillBulb />
                  <span class="ml-3">
                    <Link to={`/brainstorm`} className="text-white no-underline">Brainstorm</Link>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <div class="main-content flex flex-col flex-grow p-4">
            <h1 class="font-bold text-2xl text-gray-700">Dashboard</h1>
            {/* main body */}
            <div
              class="flex flex-col flex-grow border-4 border-black-100 border-dashed bg-white rounded mt-4"
            >
              <Outlet />
            </div>
            {/* main body end*/}
          </div>
          <footer class="footer px-4 py-6">
            <div class="footer-content">
              <p class="text-sm text-gray-600 text-center">An Authz Project<a href="https://twitter.com/iaminos"> by Amogh Y (ayermalkar99@gmail.com)</a></p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
