import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from "./pages/main";
import Splash from "./pages/splash";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      // setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);
  return (
    <div>
       {loading ? <Splash /> :<RouterProvider router={router} />}
    </div>
  );
}

export default App;
