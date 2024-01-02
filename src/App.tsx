import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SolutionsPage from "./pages/SolutionsPage/SolutionsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: (
        <>
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
          <Navigation />
          <HomePage />
          <Footer />
        </>
      ),
    },
    {
      path: "/solutions",
      element: (
        <>
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
