import React from 'react';
import {render} from 'react-dom';
import Library from './Library'

let bookList = [
    {"title":"Harry Potter 1","author":"JK Rowling 1","pages":100},
    {"title":"Harry Potter 2","author":"JK Rowling 2","pages":200},
    {"title":"Harry Potter 3","author":"JK Rowling 3","pages":300}
]

render(<Library books={bookList}/>, 
                document.getElementById('root'))