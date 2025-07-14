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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import Splash from "./pages/splash";
import NavBar from "./pages/nav";
import Footer_section from "./pages/footer";
import ContactUs from "./pages/contactus";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Layout() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <Splash />;

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <NavBar />
      <Outlet />
      <Footer_section />
    </>
  );
}

import { Outlet } from "react-router-dom";
import Aboutus from "./pages/aboutus";
import Register from "./pages/register";
import Thankyou from "./pages/thankyou";
import Pricing from "./pages/pricing";
import Lanching from "./pages/lanching";

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
        path: "/Pricing",
        element: <Pricing />,
      },
      {
        path: "/lanching",
        element: <Lanching />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Thankyou",
        element: <Thankyou />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
