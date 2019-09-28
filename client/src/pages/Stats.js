import React, {Component} from "react";

import {List, ListItem, DataChart} from "../components/Viewer";
import API from "../utils/API";

class Stats extends Component {
  state = {
    days: [],
    currentUser: this.props.currentUser
  }

  componentDidMount() {
    this.loadDays();
  }

  loadDays = () => {
    API.getAllFromUser(this.props.currentUser)
      .then(res => {
        console.log(res.data);
        this.setState({ days: res.data });
        }
      )
      .catch(err => console.log(err));
  }

  render() {
    return(

      <div>

        <p className="lead">A look back at your week</p>

        <DataChart />

        {this.state.days.length ? (
          <List>
            {this.state.days.map(day => (
              <ListItem key={day._id}>
                {day.username} on {day.date}: {day.rating}
              </ListItem>
            ))}
          </List>
        ) : (
          <p className="lead">No Results to Display</p>
        )}

      </div>

    )
  }

}

export default Stats;