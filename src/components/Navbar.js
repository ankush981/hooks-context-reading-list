import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>{
        authContext => {
          return <ThemeContext.Consumer>{
            themeContext => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, dark, light } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{background: theme.ui, color: theme.text}}>
                  <h1>Book-Reading List</h1>
                  <div>
                    { isAuthenticated ? 'Logged in' : 'Logged out'}
                    <div>
                      <br/>
                      <button onClick={toggleAuth}>Toggle auth</button>
                    </div>
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }
          }</ThemeContext.Consumer>
        }
      }</AuthContext.Consumer>
    );
  }
}
 
export default Navbar;