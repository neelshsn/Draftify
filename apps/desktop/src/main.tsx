import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { APP_TITLE } from '@/core/app-info';
import App from './App';
import './index.css';

document.title = APP_TITLE;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
