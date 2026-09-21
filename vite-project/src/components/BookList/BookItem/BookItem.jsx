import "./BookItem.css"

const BookItem = ({ book, onDelete, onToggleRead }) => {
  const firstLetter = book.title.charAt(0).toUpperCase()

  return (
    <div className="book-row">
      <div className="book-cover" style={{ backgroundColor: "#4f6b52" }}>
        {firstLetter}
      </div>
      <div className="book-info">
        <p className={book.read ? "book-title done" : "book-title"}>
          {book.title}
        </p>
      </div>
      <div className={book.read ? "read-check checked" : "read-check"} onClick={() => onToggleRead(book.id)}>
        <span className="check-circle">✓</span>
        <span className="read-label">Прочитано</span>
      </div>
      <button className="delete-btn" onClick={() => onDelete(book.id)} title="Убрать с полки">
        ✕
      </button>
    </div>
  )
}

export default BookItem