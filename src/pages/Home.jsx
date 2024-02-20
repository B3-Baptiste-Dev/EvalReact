import { BookContext } from '../context/BookContext';
import {useContext} from "react";
import Header from "../Header.jsx";

function Home() {
    const { books, dispatch } = useContext(BookContext);

    return (
        <>
            <Header />
            <div>
                {books.map(book => (
                    <div key={book.id} className={`book-item ${book.stock === 0 ? 'out-of-stock' : ''}`}>
                        <span>{book.title} - Stock: {book.stock}</span>
                        <div>
                            <button onClick={() => dispatch({type: 'ADD_STOCK', id: book.id})}>+</button>
                            <button onClick={() => dispatch({type: 'REMOVE_STOCK', id: book.id})}
                                    className={`${book.stock === 0 ? 'out-of-stock' : ''}`}>-</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
