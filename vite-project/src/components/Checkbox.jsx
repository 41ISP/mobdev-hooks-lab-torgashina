function Checkbox({checked, onToggle}){
  return (
    <div className={`read-check ${checked ? "checked" : ""}checked`} onClick={onToggle} data-role="toggle">
          <span className="check-circle">✓</span>
          <span className="read-label">Прочитано</span>
        </div>
  )
}
export default Checkbox