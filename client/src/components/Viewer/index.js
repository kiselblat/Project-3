import React from "react";

import "./Viewer.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export function DataChart(props) {
  return (
    <div>
      <p>This is where the data chart goes</p>
    </div>
  )
}