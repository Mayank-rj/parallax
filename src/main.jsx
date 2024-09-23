import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home/Home.jsx"
import About from "./Pages/About/About.jsx"
import Contact from "./Pages/Contact/Contact.jsx"
import ErrorPage from "./Pages/Error/ErrorPage.jsx";
import "./index.css";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import ServiceHome from "./Components/ServiceHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ServiceHome></ServiceHome>
  </React.StrictMode>
);
