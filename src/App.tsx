import React from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <RouterProvider router={router}>
      <div className="app">
        {/* The RouterProvider will render the root route which includes the navigation and outlet */}
      </div>
    </RouterProvider>
  );
}

export default App;
