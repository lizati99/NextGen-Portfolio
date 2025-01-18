import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicLayouts from './Layouts/PublicLayouts';
import PageNotFound from './Pages/PageNotFound';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import ContactPage from './Pages/ContactPage';
import PortfolioPage from './Pages/PortfolioPage';
import '@fontsource/audiowide';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicLayouts />,
      errorElement: <PageNotFound />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/about', element: <AboutPage /> },
        { path: '/resume', element: <ResumePage />},
        { path: '/portfolio', element: <PortfolioPage />},
        { path: '/contact', element: <ContactPage />},
        { path: '*', element: <PageNotFound /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
