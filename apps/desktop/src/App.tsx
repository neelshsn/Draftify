import type { FC } from 'react';
import { APP_TITLE } from '@/core/app-info';
import './App.css';

const App: FC = () => (
  <main className="app-shell">
    <h1 className="app-title" data-testid="app-title">
      {APP_TITLE}
    </h1>
    <p className="tagline">Compose, polish, and share drafts with ease.</p>
  </main>
);

export default App;
