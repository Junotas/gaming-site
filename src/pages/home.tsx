import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

const HomePage = () => (
  <div>
    <h2>Welcome to the Home Page</h2>
    <p>This is the home page of the app.</p>
  </div>
);

export const Route = createFileRoute('/')({
  component: HomePage,
});
