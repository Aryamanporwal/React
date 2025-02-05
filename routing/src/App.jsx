import './App.css'
import { createBrowserRouter, RouterProvider }from "react-router-dom";
import About from './components/About';
import DashBoard from './components/DashBoard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Params from './components/Params';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import Notfound from './components/Notfound';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div><Navbar/>
      <Home/></div>,
    },
    {
      path:"/about",
      element: <div><Navbar/>
      <About/></div>,
    },
    {
      path:"/dashboard",
      element: <div><Navbar/>
      <DashBoard/></div>,
      children:[
        {path:'courses',
          element:<Courses/>
        },
        {path:'mock-test',
          element:<MockTest/>
        },
        {
          path:'reports',
          element:<Reports/>

        },
        {
          path:'*',
          element:<NotFound/>
        }
      ]
    },
    {
      path:"/student/:id",
      element:<div><Navbar/>
      <Params/></div>,
    }
  ]
);




function App() {


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
