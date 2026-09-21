import "./Input.css"

const Input = ({ value, onChange, onKeyDown, placeholder, className }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default Input