import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicLayouts from './Layouts/PublicLayouts';
import PageNotFound from './Pages/PageNotFound';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import '@fontsource/audiowide';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicLayouts />,
      errorElement: <PageNotFound />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/about', element: <AboutPage /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
