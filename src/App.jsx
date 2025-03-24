import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/About"
import Cards from "./components/Cards"
import FirstSection from "./components/FirstSection"
import Footer from "./components/Footer"
import Layout from "./components/Layout"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
 
    children: [
      {
        path: "/",
        element: <FirstSection></FirstSection>
      },
      {
        path: "/cards",
        element: <Cards></Cards>
      },
      {
        path: "/about",
        element: <About></About>
      }
      ,
      {
        path: "/footer",
        element: <Footer></Footer>
      }
    ]
}
])
function App() {
 
  return (<>
    
    <RouterProvider router={router}></RouterProvider>
  </>)
}

export default App
