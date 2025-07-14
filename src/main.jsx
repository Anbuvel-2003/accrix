import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Splash from "./pages/splash.jsx";
function Root() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return loading ? <Splash /> : <App />
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root/>
  </StrictMode>
);
