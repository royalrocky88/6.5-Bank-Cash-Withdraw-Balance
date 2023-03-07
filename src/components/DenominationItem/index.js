// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationsList, balanceDeduction} = props
  const {value} = denominationsList
  const totalUpdate = () => {
    balanceDeduction(value)
  }

  return (
    <li className="card-list-container">
      <div>
        <button type="button" className="btn" onClick={totalUpdate}>
          {value}
        </button>
        <br />
      </div>
    </li>
  )
}

export default DenominationItem
