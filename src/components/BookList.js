import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);

  return ( 
    <div className="book-list" style={{ background: theme.bg, color: theme.text }}>
      <ul>
        {
          books.map(book => {
            return (
              <li 
                style={{ background: theme.ui }} 
                id={ book.id }
              >
                { book.title }
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
 
export default BookList;