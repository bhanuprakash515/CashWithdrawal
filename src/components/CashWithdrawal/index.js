import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balanceAmount: 2000,
  }

  onDeleteFunction = value => {
    this.setState(prevState => ({
      balanceAmount: prevState.balanceAmount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balanceAmount} = this.state

    return (
      <div className="container">
        <div className="card">
          <div className="card-image">
            <button className="icon-btn" type="button">
              s
            </button>
            <p className="heading-name">Sarah Williams</p>
          </div>
          <div className="balance-heading">
            <p className="balance-para">Your Balance</p>
            <div>
              <p className="amount-bal">{balanceAmount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">WithDraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <div className="button-ul">
            <ul className="list-container">
              {denominationsList.map(each => (
                <DenominationItem
                  buttonItems={each}
                  key={each.id}
                  onDeleteFunction={this.onDeleteFunction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
