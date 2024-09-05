import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { AboutPg, HomePg, PartnerPg } from './pages'
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./App.css";

function App() {

  useEffect(() =>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  })

  function Root() {
    return(
      <div>
        <Routes>
        <Route path='/' element={<HomePg />} />
        <Route path='/about' element={<AboutPg />} />
        <Route path='/partnership' element={<PartnerPg />} />
      </Routes>
      </div>
      
    )
  }

  const router = createBrowserRouter([{
    path: "*",
    Component: Root
  }]) 


  return (
    <div>
      <RouterProvider  router={router} />
    </div>
  )
}

export default App
