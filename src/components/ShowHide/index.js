/* eslint-disable no-undef */
// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: false,
    lastCard: false,
  }

  firstName = () => {
    const {firstCard} = this.state
    this.setState({firstCard: !firstCard})
  }

  lastName = () => {
    const {lastCard} = this.state
    this.setState({lastCard: !lastCard})
  }

  render() {
    let modeCls
    const {firstCard} = this.state
    const {lastCard} = this.state
    const description = firstCard
      ? ((modeCls = 'name-card'), 'Joe')
      : ((modeCls = 'name-card'), '')
    const descriptions = lastCard
      ? ((modeCls = 'name-card'), 'Jonas')
      : ((modeCls = 'name-card'), '')
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <button onClick={this.firstName} className="button" type="button">
            Show/Hide Firstname
          </button>
          <p className={`name-card ${modeCls}`}>{description}</p>
          <button onClick={this.lastName} className="button" type="button">
            Show/Hide Lastname
          </button>
          <p className={`name-card ${modeCls}`}>{descriptions}</p>
        </div>
      </div>
    )
  }
}

export default ShowHide
