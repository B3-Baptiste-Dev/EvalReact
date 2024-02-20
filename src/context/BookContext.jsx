import { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from './bookReducer';
import PropTypes from 'prop-types';

export const BookContext = createContext();

const initialState = JSON.parse(localStorage.getItem('books')) || [
    { id: 1, title: 'Le Seigneur des Anneaux', stock: 10 },
    { id: 2, title: 'Harry Potter', stock: 5 },
    { id: 3, title: 'Les Misérables', stock: 3 },
];

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, initialState);

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
};

BookContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BookContextProvider;
