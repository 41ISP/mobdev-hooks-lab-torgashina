import BookForm from "../components/BookForm/BookForm.jsx"
import FilterChip from "../components/FilterChip/FilterChip.jsx"
import BookList from "../components/BookList/BookList.jsx"
import "./ShelfScreen.css"

const ShelfScreen = ({books, showOnlyUnread,onToggleFilter, onAdd, onDelete, onToggleRead}) => {
  const filteredBooks = showOnlyUnread ? books.filter((book) => !book.read) : books

  return (
    <section className="screen active">
      <p className="greeting">Добрый вечер</p>
      <BookForm onAdd={onAdd} />
      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
        <FilterChip isChecked={showOnlyUnread} onToggle={onToggleFilter} />
      </div>
      <BookList
        books={filteredBooks}
        onDelete={onDelete}
        onToggleRead={onToggleRead}
      />
    </section>
  )
}

export default ShelfScreen