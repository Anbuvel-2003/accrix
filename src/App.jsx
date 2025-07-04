// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
// import Main from "./pages/main";
// import Splash from "./pages/splash";
// import NavBar from "./pages/nav";
// import Footer_section from "./pages/footer";
// import ContactUs from "./pages/contactus";

// function App() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Main />,
//     },
//     {
//       path: "/ContactUs",
//       element: <ContactUs />,
//     },
//   ]);
//   return (
//     <div>
//       {loading ? <Splash /> :
//         <div>
//           {/* nav bar setion */}
//           <NavBar/>
//           <RouterProvider router={router} />
//           {/* footer section */}
//           <Footer_section/>
//         </div>
//       }
//     </div>
//   );
// }

// export default App;

// App.jsx
import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/main";
import Splash from "./pages/splash";
import NavBar from "./pages/nav";
import Footer_section from "./pages/footer";
import ContactUs from "./pages/contactus";

function Layout() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <Splash />;

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer_section />
    </>
  );
}

import { Outlet } from "react-router-dom";
import Aboutus from "./pages/aboutus";
import Register from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/AboutUs",
        element: <Aboutus />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
