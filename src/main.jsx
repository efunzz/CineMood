import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage.jsx";
import MoviesPage from "./routes/MoviesPage.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import MovieDetailsPage from "./routes/MoviesDetailsPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "moviespage/:emotion",
    element: <MoviesPage />,
  },
  {
    path: "moviespage/:emotion/moviecontent/:movieID",
    element: <MovieDetailsPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
