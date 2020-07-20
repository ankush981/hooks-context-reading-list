import React, { Component } from 'react';

class BookList extends Component {
  render() { 
    return (  
      <div className="book-list">
        <ul>
          <li>The Name of the Rose</li>
          <li>One Hundred Years of Solitude</li>
          <li>Cry, the Beloved Country</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;