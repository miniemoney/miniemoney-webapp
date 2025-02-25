import { useLocation } from "react-router";
import "./App.css";
import Router from "./Routes/router";
import { useEffect } from "react";
import { seoData } from "./seoData";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    const updateMetaTags = (path: any) => {
      const meta = seoData[path] || seoData["/"];

      document.title = meta.title;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", meta.description);
      document
        .querySelector('meta[property="og:title"]')
        ?.setAttribute("content", meta.title);
      document
        .querySelector('meta[property="og:description"]')
        ?.setAttribute("content", meta.description);
      document
        .querySelector('meta[property="og:image"]')
        ?.setAttribute("content", meta.image);
      document
        .querySelector('meta[property="og:url"]')
        ?.setAttribute("content", meta.url);
    };

    updateMetaTags(pathname);
  }, [pathname]);
  console.log(pathname);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
