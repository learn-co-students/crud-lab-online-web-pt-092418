import React, { Component } from 'react';

class ReviewInput extends Component {

    constructor(props) {
    super(props)

     this.state = {
      text: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }
    
    this.props.addReview(review);
    this.setState({
      text: '',
    });
  }

    render() {
      return (
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <p><label>Add Review</label>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleOnChange} />
            </p>
            <input type="submit" />
          </form>
        </div>
      );
    }
  };

export default ReviewInput;
