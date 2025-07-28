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
import { FaArrowUp } from "react-icons/fa6";
function Layout() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <Splash />;
  const [showTopBtn, setShowTopBtn] = useState(false);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 300 && currentScrollY > lastScrollY) {
      setShowTopBtn(true); // Scrolling down
    } else {
      setShowTopBtn(false); // Scrolling up or not far enough
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <NavBar />
      <Outlet />
      <Footer_section />
      {showTopBtn && (
        <div
          onClick={scrollToTop}
          className="fixed lg:right-10 md:right-10 right-5 bottom-20 lg:bg-transparent lg:p-0 lg:rounded-none md:bg-transparent md:p-0 md:rounded-none  bg-white !p-3 rounded-full cursor-pointer !gap-1 group place-content-center place-items-center flex flex-col"
        >
          <FaArrowUp className="text-2xl text-[#9F70FD]" /> 
          <span className="text-[15px] text-[#9F70FD] lg:block md:block hidden">Top</span>
        </div>
      )}
    </>
  );
}

import { Outlet } from "react-router-dom";
import Aboutus from "./pages/aboutus";
import Register from "./pages/register";
import Thankyou from "./pages/thankyou";
import Pricing from "./pages/pricing";
import Lanching from "./pages/lanching";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";

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
      {
        path: "/Privacy",
        element: <Privacy />,
      },
      {
        path: "/Terms",
        element: <Terms />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
