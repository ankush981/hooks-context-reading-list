import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, dark, light } = useContext(ThemeContext);
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
 
export default Navbar;