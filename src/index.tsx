import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './app/styles/index.scss';

import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

import App from './app/App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Container root is not find');
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
);
