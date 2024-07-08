import React from "react";
import { createFileRoute } from "@tanstack/react-router";
//import '../css/home.css';


const HomePage = () => (
  <div>
    <h2>Welcome!</h2>
    <p>
      This is my side project that will act as a portfolio for different games.
    </p>
  </div>
);

export const Route = createFileRoute("/")({
  component: HomePage,
});
