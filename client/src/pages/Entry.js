import React, {Component} from "react";

import {Rater, Submit} from "../components/Rater";

class Entry extends Component {

  constructor(props) {
    super(props);
    this.state= {
      dayRating: "0"
    }
    this.handleInputChange = this.handleInputChange.bind(this);
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
  }

  render() {
    
    return(

      <div>

        <p className="lead">How was your day?</p>
        <p className="testingfield">Selected Rating: {this.state.dayRating}</p>

        <Rater
          name='dayRating'
          onChange={this.handleInputChange}
          checked={this.state.dayRating}
        />
        <Submit />

      </div>

    )
  }

};

export default Entry;