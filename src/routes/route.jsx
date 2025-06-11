import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import GalleryPage from "../pages/Gallery";

const route = createBrowserRouter([
  {
    path : "/",
    element :  <App/> 
  },
  {
    path: "/About",
    element: <AboutPage/>
  },
  {
    path: "/Gallery",
    element: <GalleryPage/>
  },
  {
    path: "/Contact",
    element: <ContactPage/>
  }
])

export default route;