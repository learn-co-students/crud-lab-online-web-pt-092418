import React, { Component } from 'react';

class Review extends Component {

  handleClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
  };

export default Review;
