import { useLocation } from 'react-router';
import './App.css'
import Router from './Routes/router'
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <Router />
    </>
  )
}

export default App
