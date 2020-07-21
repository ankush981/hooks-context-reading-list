import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Name of the Rose'
    },
    {
      id: 2,
      title: 'One Hundred Years of Solitude'
    },
    {
      id: 3,
      title: 'Cry, the Beloved Country'
    }
  ]);

  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;