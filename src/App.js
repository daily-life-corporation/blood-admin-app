/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Routing from './routes'

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <nav
          className="navbar is-white is-fixed-top shadow-sm  "
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                {/* <img src={process.env.PUBLIC_URL + '/images/devahoy-text-logo.png'} alt="DEVAHOY LOGO" width="112" height="28" /> */}
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink
                  exact
                  to="/"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/posts"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Posts
                </NavLink>
                <NavLink
                  to="/projects"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  About
                </NavLink>
                {/* <a className="navbar-item" href="https://github.com/phonbopit" target="_blank">Star on <i className="fab fa-github"></i></a> */}
              </div>
            </div>
          </div>
        </nav>
        <div className="d-flex bd-highlight bg-white">
          <div className="p-2 flex-shrink-0 bd-highlight bd-sidebar bg-white shadow rounded containBody sidenav">
            <div className="">
              <aside class="menu">
                <p class="menu-label">General</p>
                <ul class="menu-list">
                  <li>
                    <a>Dashboard</a>
                  </li>
                  <li>
                    <a>Customers</a>
                  </li>
                </ul>
                <p class="menu-label">Administration</p>
                <ul class="menu-list">
                  <li>
                    <a>Team Settings</a>
                  </li>
                  <li>
                    {/* <a class="is-active">Manage Your Team</a> */}
                    <ul>
                      <li>
                        <a>Members</a>
                      </li>
                      <li>
                        <a>Plugins</a>
                      </li>
                      <li>
                        <a>Add a member</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Invitations</a>
                  </li>
                  <li>
                    <a>Authentication</a>
                  </li>
                </ul>
                <p class="menu-label">Transactions</p>
                <ul class="menu-list">
                  <li>
                    <a>Payments</a>
                  </li>
                  <li>
                    <a>Transfers</a>
                  </li>
                  <li>
                    <a>Balance</a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
          <div className="p-2 w-100 bd-highlight shadow-none rounded main">
            <Routing />
          </div>
        </div>
      </div>
    )
  }
}

export default App
