import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { AboutPg, HomePg } from './pages'

function App() {

  function Root() {
    return(
      <div>
        <Routes>
        <Route path='/' element={<HomePg />} />
        <Route path='/about' element={<AboutPg />} />
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
