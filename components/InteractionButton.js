import React from "react";
import "../CSS/InteractionButton.css";
import PropTypes from "prop-types";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#06D6A0", marginTop: 20 }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func,
};

export default Switch;
