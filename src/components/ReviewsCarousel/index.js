import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  reviews = reviewsList => {
    const {currentIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      currentIndex
    ]
    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  leftArrow = () => {
    const {currentIndex} = this.state
    if (currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }))
    }
    console.log('clicked left arrow')
  }

  rightArrow = () => {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    if (currentIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }))
    }
    console.log(`right arrow clicked ${currentIndex}`)
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    console.log(currentIndex)
    return (
      <div className="app-container">
        <button type="button" data-testid="leftArrow" onClick={this.leftArrow}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        {this.reviews(reviewsList)}
        <button
          type="button"
          data-testid="rightArrow"
          onClick={this.rightArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
