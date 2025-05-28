import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import BaseLyaout from './layouts/BaseLyaout';
import { store } from './appStrore';
import '@/shared/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLyaout />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
