import React from "react";

export function Sender(props) {
  return(
    <input className="btn btn-primary" type="submit" value="Submit" onClick={props.onClick}></input>
  )
}