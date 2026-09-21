import Checkbox from "../BookForm/Checkbox/Checkbox.jsx"
import "./FilterChip.css"

const FilterChip = ({ isChecked, onToggle }) => {
  return (
    <Checkbox
      id="filterCheckbox"
      checked={isChecked}
      onChange={onToggle}
      label="Только непрочитанные"
      className="filter-chip"
    />
  )
}

export default FilterChip