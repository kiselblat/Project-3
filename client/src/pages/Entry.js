import React, {Component} from "react";

import {Rater, Submit} from "../components/Rater";
// import {Submit} from "../components/Submit";

class Entry extends Component {

  render() {
    return(

      <div>

        <p className="lead">How was your day?</p>

        <Rater />
        <Submit />

      </div>

    )
  }

};

export default Entry;