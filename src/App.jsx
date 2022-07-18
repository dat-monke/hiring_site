import React from 'react';
import { Link, Outlet } from "react-router-dom";

// Home page - This will be the main function
function Home() {
  return (
    <div> 
      <nav> 
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  )
}

// Secondary page - about
export function About() {
  return (
    <div> 
      <nav> 
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About</h1>
      <Outlet />
    </div>
  )
}

// Secondary page - history
export function History() {
  return (
    <div> 
      <h1>Our History</h1>
    </div>
  )
}

// Secondary page - contact
export function Contact() {
  return (
    <div> 
      <nav> 
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact</h1>
    </div>
  )
}

// Exporting this file and activating the function Home
export function App() {
  return (
    <Home />
  );
}

