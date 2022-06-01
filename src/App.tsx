import { Link, Route, Routes } from 'solid-app-router';
// import { lazy } from "solid-js";
import { Component, createEffect } from 'solid-js';
import RequiredAuth from './pages/Required Auth';

const App: Component = () => {
  return (
    <>
      <h1>My Site with Lots of Pages</h1>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/users" element={<RequiredAuth>
          <Users />
        </RequiredAuth>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<div>This site was made with Solid</div>} />
      </Routes>
    </>
  );
};

const Users: Component = () => {
  return (
    <div>Users</div>
  );
};

const Login: Component = () => {
  return (
    <div>Login</div>
  );
};

const Home: Component = () => {
  return (
    <div>Home</div>
  );
};

export default App;
