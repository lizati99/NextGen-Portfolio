import './App.css';
import React, { Suspense, lazy} from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fontsource/audiowide';

// const Loader = lazy( () => import('./Layouts/Loaders/Loader.jsx'));
const PublicLayouts = lazy(() => import("./Layouts/PublicLayouts"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const ResumePage = lazy(() => import("./Pages/ResumePage"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));
const PortfolioPage = lazy(() => import("./Pages/PortfolioPage"));
// const PageWrapper = lazy(() => import("./Layouts/PageWrapper"));








const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayouts />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/resume", element: <ResumePage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function App() {

  

  return (
      // <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
      // </Suspense>
  );
}

export default App;
