// Write your code here
import {Component} from 'react'

import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImageUrl: headsUrl,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headsUrl
      latestHeadsCount += 1
    } else {
      tossImage = tailsUrl
      latestTailsCount += 1
    }
    this.setState({
      tossImageUrl: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossImageUrl, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="coin-toss-game-app-container">
        <div className="coin-toss-game-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img src={tossImageUrl} alt="toss result" className="toss-image" />
          <button type="button" className="toss-coin" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="toss-count-container">
            <p className="count-heading">Total: {totalCount}</p>
            <p className="count-heading">Heads: {headsCount}</p>
            <p className="count-heading">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
