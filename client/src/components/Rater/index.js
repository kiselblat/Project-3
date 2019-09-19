import React from "react";

export function Rater(props) {
  return (
    <div className="rating-selector">

      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="1" />
        <label className="form-check-label" for="inlineCheckbox1">1</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="2" />
        <label className="form-check-label" for="inlineCheckbox2">2</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="3" />
        <label className="form-check-label" for="inlineCheckbox3">3</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="4" />
        <label className="form-check-label" for="inlineCheckbox3">4</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="5" />
        <label className="form-check-label" for="inlineCheckbox3">5</label>
      </div>

    </div>
  )
}

export function Submit(props) {
  return(
    <input class="btn btn-primary" type="submit" value="Submit"></input>
  )
}