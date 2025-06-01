import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { store } from './appStrore';
import '@/shared/index.css';
import { RouterProvider } from 'react-router-dom';
import { appRoter } from './appRouter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRoter} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
