import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          context => {
            const {isLightTheme, dark, light} = context;
            const theme = isLightTheme ? light : dark;
            return (
              <nav style={{background: theme.ui, color: theme.text}}>
                <h1>Book-Reading List</h1>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            );
          }
        }
      </ThemeContext.Consumer>
    );
  }
}
 
export default Navbar;