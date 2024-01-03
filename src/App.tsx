import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SolutionsPage from "./pages/SolutionsPage/SolutionsPage";
import { ScrollToTop } from "./utils/ScrollToTop";
import AniTransition from "./utils/AniTransition/AniTransition";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <AniTransition>
        <Outlet />
      </AniTransition>
      <Footer />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "rozwiazania", element: <SolutionsPage /> },
        { path: "kontakt", element: <ContactPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return (
    <div id="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
