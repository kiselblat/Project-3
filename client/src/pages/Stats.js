import React, {Component} from "react";

import {DataList, DataChart} from "../components/Viewer";

class Stats extends Component {

  render() {
    return(

      <div>

        <p className="lead">A look back at your week</p>

        <DataList />
        <DataChart />

      </div>

    )
  }

}

export default Stats;