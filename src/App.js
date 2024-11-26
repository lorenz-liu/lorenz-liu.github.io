import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Blogs = lazy(() => import('./pages/Blogs'));
const CV = lazy(() => import('./pages/CV'));
const Stats = lazy(() => import('./pages/Stats'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));

const App = () => {
  // Matomo Analytics
  useEffect(() => {
    // eslint-disable-next-line no-multi-assign
    const _mtm = window._mtm = window._mtm || [];
    _mtm.push({ 'mtm.startTime': (new Date().getTime()), event: 'mtm.Start' });
    const d = document;
    const g = d.createElement('script');
    const s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = 'https://cdn.matomo.cloud/lorenz.matomo.cloud/container_xGRkVfpo.js';
    s.parentNode.insertBefore(g, s);
  }, []);

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blog" element={<BlogDetail />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
