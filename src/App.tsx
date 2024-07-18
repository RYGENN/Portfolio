// import { Button } from "./components/ui/button";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";
import Loginpage from "./pages/Loginpage";


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/search",
      element: <Searchpage />,
    },
    {
      path:"login",
      element:<Loginpage/>
    }
  ]);
  
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
