import React, {Component} from "react";

import { Sender } from "../components/Prefs";
import API from "../utils/API";

class Settings extends Component {

  handleSend = event => {
    event.preventDefault();

    console.log(`Sent mail`);

    API.sendMail({to: "kiselblat@gmail.com", html: "This is a test of the Mood Tracker Mailer"});
  }

  render() {
    return(

      <div>

        <p className="lead">Let's test the mailer</p>

        

        <Sender 
          onClick={this.handleSend}
        />

      </div>

    )
  }

}

export default Settings;