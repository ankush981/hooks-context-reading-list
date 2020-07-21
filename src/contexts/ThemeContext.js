import React, { Component, createContext } from 'react';
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = { 
    isLightTheme: true,
    light: {
      text: '#555',
      ui: '#DDD',
      bg: '#EEE'
    },
    dark: {
      text: '#DDD',
      ui: '#333',
      bg: '#555'
    }
  };

  render() { 
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;