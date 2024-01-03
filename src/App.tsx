import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SolutionsPage from "./pages/SolutionsPage/SolutionsPage";
import { ScrollToTop } from "./utils/ScrollToTop";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: (
        <>
          <ScrollToTop />
          <Navigation />
          <NotFoundPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <Navigation />
          <HomePage />
          <Footer />
        </>
      ),
    },
    {
      path: "/rozwiazania",
      element: (
        <>
          <ScrollToTop />
          <Navigation />
          <SolutionsPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/kontakt",
      element: (
        <>
          <ScrollToTop />
          <Navigation />
          <ContactPage />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <div id="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
