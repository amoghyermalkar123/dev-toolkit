import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MRList from "./components/mrList"
import JsonFmt from "./components/jsonfmt";
import Reminder from "./components/reminder";
import Notes from "./components/notes";
import Draw from "./components/draw";
import Todo from "./components/todo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/mr/activity",
        element: <MRList />,
      },
      {
        path: "/json-fmt",
        element: <JsonFmt />,
      },
      {
        path: "/reminder",
        element: <Reminder />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },
      {
        path: "/brainstorm",
        element: <Draw />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
