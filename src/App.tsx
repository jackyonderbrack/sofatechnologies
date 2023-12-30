import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Navigation from "./components/Navigation/Navigation";
import SolutionsPage from "./pages/SolutionsPage/SolutionsPage";
import Footer from "./components/Footer/Footer";

function App() {
  const router = createBrowserRouter([
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
      path: "/rozwiazania",
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
    <>
      <main id="App">
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
