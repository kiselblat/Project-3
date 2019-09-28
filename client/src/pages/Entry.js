import React, {Component} from "react";

import {Rater, Submit} from "../components/Rater";

import API from "../utils/API";

class Entry extends Component {

  constructor(props) {
    super(props);
    this.state= {
      dayRating: "0",
      currentUser: props.currentUser
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle any changes to the input fields
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(`Submitted: ${this.state.dayRating}`);

    API.saveDay({
      rating: this.state.dayRating,
      username: this.state.currentUser
    });
  }

  render() {
    
    return(

      <div>

        <p className="lead">How was your day?</p>
        <p className="testingfield">Selected Rating: {this.state.dayRating}</p>
        <p className="testingfield">Current User: {this.state.currentUser}</p>

        <Rater
          name='dayRating'
          onChange={this.handleInputChange}
          checked={this.state.dayRating}
        />
        <Submit 
          onClick={this.handleSubmit}
        />
      </div>

    )
  }

};

export default Entry;