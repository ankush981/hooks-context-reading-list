import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;

  render() { 
    const {isLightTheme, dark, light} = this.context;
    const theme = isLightTheme ? light : dark;

    return (  
      <div className="book-list" style={{background: theme.bg, color: theme.text}}>
        <ul>
          <li style={{background: theme.ui}}>The Name of the Rose</li>
          <li style={{background: theme.ui}}>One Hundred Years of Solitude</li>
          <li style={{background: theme.ui}}>Cry, the Beloved Country</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;