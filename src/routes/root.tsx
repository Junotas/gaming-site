import React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <h1>My App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" activeProps={activeProps}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tictac" activeProps={activeProps}>
                TicTac
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  ),
});
