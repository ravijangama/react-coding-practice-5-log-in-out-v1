// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  onClickLogin = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    const showText = isLogin ? 'Please Login' : 'Welcome User'
    const logText = isLogin ? 'Login' : 'Logout'
    const jsxElement = (
      <div className="bg-container">
        <div className="log-in-out-container">
          <h1 className="heading">{showText}</h1>
          <button type="button" className="button" onClick={this.onClickLogin}>
            {logText}
          </button>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default Home
