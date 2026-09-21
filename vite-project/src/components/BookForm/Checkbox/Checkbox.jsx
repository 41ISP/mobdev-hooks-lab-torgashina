import "./Checkbox.css"

const Checkbox = ({ id, checked, onChange, label, className }) => {
  return (
    <div className={className}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>
        <span className="dot"></span>
        {label}
      </label>
    </div>
  )
}

export default Checkbox