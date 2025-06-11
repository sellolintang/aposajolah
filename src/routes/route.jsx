import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactPage from "../pages/Contact";
import HistoryPage from "../pages/History";
import AboutPage from "../pages/About";
import GalleryPage from "../pages/Gallery";

const route = createBrowserRouter([
  {
    path : "/",
    element :  <App/> 
  },
  {
    path: "/History",
    element: <HistoryPage/>
  },
  {
    path: "/Gallery",
    element: <GalleryPage/>
  },
  {
    path: "/Contact",
    element: <ContactPage/>
  },
  {
    path: "/About",
    element: <AboutPage/>
  }
])

export default route;