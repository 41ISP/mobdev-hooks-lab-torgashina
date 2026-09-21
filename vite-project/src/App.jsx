import { useState } from "react"
import { nanoid } from "nanoid"
import ShelfScreen from "./pages/ShelfScreen.jsx"

const App = () => {
  const [books, setBooks] = useState([])
  const [showOnlyUnread, setShowOnlyUnread] = useState(false)

  const handleAdd = (title) => {
    const newBook = {
        id: nanoid(), 
        title, read: false 
    }
    setBooks((prev) => [...prev, newBook])
  }

  const handleDelete = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id))
  }

  const handleToggleRead = (id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    )
  }

  return (
    <div className="app">
      <div className="app-header">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div className="brand-name">Shelf</div>
        </div>
      </div>
      <ShelfScreen
        books={books}
        showOnlyUnread={showOnlyUnread}
        onToggleFilter={() => setShowOnlyUnread((prev) => !prev)}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onToggleRead={handleToggleRead}
      />
    </div>
  )
}

export default App