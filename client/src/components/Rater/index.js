import React from "react";

export function Rater(props) {
  return (
    <div className="rating-selector">

      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
        <label className="form-check-label" for="inlineCheckbox1">1</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
        <label className="form-check-label" for="inlineCheckbox2">2</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
        <label className="form-check-label" for="inlineCheckbox3">3</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
        <label className="form-check-label" for="inlineCheckbox3">4</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5" />
        <label className="form-check-label" for="inlineCheckbox3">5</label>
      </div>

    </div>
  )
}