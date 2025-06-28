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
import NavBar from "./pages/nav";
import Footer_section from "./pages/footer";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
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
      {loading ? <Splash /> :
        <div>
          {/* nav bar setion */}
          <NavBar/>
          <RouterProvider router={router} />
          {/* footer section */}
          <Footer_section/>
        </div>
      }
    </div>
  );
}

export default App;
