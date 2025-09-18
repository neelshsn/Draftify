import { describe, expect, it } from 'vitest';
import { renderToString } from 'react-dom/server';
import Button from '@/ui/Button';

describe('Button', () => {
  it('renders without crashing', () => {
    expect(() => renderToString(<Button>Click me</Button>)).not.toThrow();
  });
});
