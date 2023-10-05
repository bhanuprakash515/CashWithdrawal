import './index.css'

const DenominationItem = props => {
  const {buttonItems, onDeleteFunction} = props
  const {value, id} = buttonItems

  const onDelete = () => {
    onDeleteFunction(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onDelete}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
