import { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';
import Header from "../Header.jsx";

function AddBook() {
    const [title, setTitle] = useState('');
    const [stock, setStock] = useState('');
    const { dispatch } = useContext(BookContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', book: { title, stock: parseInt(stock) } });
        setTitle('');
        setStock('');
    };

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit} className="add-book-form">
                <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
                <button type="submit">Ajouter Livre</button>
            </form>
        </>
    );
}

export default AddBook;
