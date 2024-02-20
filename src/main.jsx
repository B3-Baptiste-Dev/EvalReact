import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BookContextProvider from "./context/BookContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BookContextProvider>
        <App />
    </BookContextProvider>
)

