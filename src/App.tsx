// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { ThemeType } from "./types";

import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    // {
    //   path: "movie/:id",
    //   element: <SingleMovie />,
    // },
    // {
    //   path: '/favorites',
    //   element: <Favorites />,
    // },
  ]);

  const [theme, setTheme] = useState<ThemeType>("dark");

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
}

export default App;
