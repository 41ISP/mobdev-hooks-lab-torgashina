import { useState } from "react"
import Input from "./Input/Input.jsx"
import Button from "./Button/Button.jsx"
import "./BookForm.css"

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState("")

  const handleAdd = () => {
    if (title.trim() === "") return
    onAdd(title.trim())
    setTitle("")
  }

  return (
    <div className="add-book-row">
      <Input
        className="input"
        placeholder="Название книги..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <Button className="btn" onClick={handleAdd}>
        Добавить на полку
      </Button>
    </div>
  )
}

export default BookForm