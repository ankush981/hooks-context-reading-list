import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const {isLightTheme, dark, light} = this.context;
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
 
export default Navbar;