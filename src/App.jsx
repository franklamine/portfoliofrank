import { createHashRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';
import Stack from './pages/Stack.jsx';
import Contact from './pages/Contact.jsx';
import RootLayout from './layouts/RootLayout.jsx';
import NotFound from "./pages/NotFound.jsx";

const router = createHashRouter([
    {
        path: '/',
        element: <RootLayout />, // Le layout commun
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/projects', element: <Project /> },
            { path: '/stack', element: <Stack /> },
            { path: '/contact', element: <Contact /> },
            {path: '*', element: <NotFound /> },
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
