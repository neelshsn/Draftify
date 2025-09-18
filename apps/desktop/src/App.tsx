import type { FC } from 'react';
import { APP_TITLE } from '@/core/app-info';
import Button from '@/ui/Button';
import './App.css';

const App: FC = () => (
  <main className="app-shell">
    <h1 className="app-title" data-testid="app-title">
      {APP_TITLE}
    </h1>
    <p className="tagline">Compose, polish, and share drafts with ease.</p>
    <Button className="cta-button" aria-label="Start a new draft">
      Start a draft
    </Button>
  </main>
);

export default App;
