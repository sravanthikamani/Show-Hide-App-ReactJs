// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}
  firstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }
  lastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }
  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="bg-color">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="first-container">
            <button onClick={this.firstName} className="button-style">
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="name-text">Joe</p>}
          </div>
          <div className="second-container">
            <button className="button-style" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name-text">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
