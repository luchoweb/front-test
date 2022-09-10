import { useState } from "react";

import "../styles/components/SelectView.scss";

const SelectView = ({ defaultOption, options, setView }) => {
  const [viewOptions, setShowViewOptions] = useState(false);

  return (
    <div className="select-view" onClick={() => setShowViewOptions(!viewOptions)}>
      <span className="select-view-option select-view-option--main">
        { defaultOption }
        <span className="select-view-arrow">
          &#8227;
        </span>
      </span>
      <div className="select-view-options">
        { options ? options.map(option => (
          <span key={option} className={`select-view-option ${viewOptions ? 'select-view-option--open' : ''}`} onClick={() => setView(option.toLowerCase())}>
          { option }
          </span>
        )) : (
          <p>No options</p>
        )}
      </div>
    </div>
  )
}

export default SelectView;
