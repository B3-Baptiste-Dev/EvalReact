export const bookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, { ...action.book, id: Math.random() }];
        case 'ADD_STOCK':
            return state.map(book => book.id === action.id ? { ...book, stock: book.stock + 1 } : book);
        case 'REMOVE_STOCK':
            return state.map(book => book.id === action.id ? { ...book, stock: Math.max(book.stock - 1, 0) } : book);
        default:
            return state;
    }
};
