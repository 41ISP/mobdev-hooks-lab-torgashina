import BookItem from "./BookItem/BookItem.jsx"
import "./BookList.css"

const BookList = ({ books, onDelete, onToggleRead }) => {
  if (books.length === 0) {
    return <div className="empty-note">Добавьте книгу</div>
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onDelete={onDelete}
          onToggleRead={onToggleRead}
        />
      ))}
    </div>
  )
}

export default BookList