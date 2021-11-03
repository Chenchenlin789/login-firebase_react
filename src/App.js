import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useLogout } from "./hooks/useLogout";
// import useLogout from "./hooks/useLogout"

export default function App() {
  const { error, logout } = useLogout()
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">
            <img src="/logo.jpeg" alt="" />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li onClick={logout}>
              Log out
            </li>
          </ul>
        </nav>
        {error && <p>{error}</p>}

        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
