import { RouteObject } from 'react-router-dom';
import { SiteWrapper } from './components/site-wrapper/site-wrapper';
import { HomePage } from './pages/home-page/home-page';
import { About } from './pages/about/about';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <SiteWrapper />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'about', element: <About /> },
        ],
    },
];
