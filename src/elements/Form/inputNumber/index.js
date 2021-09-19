import React, { useState } from "react";

import propTypes from "prop-types";

import "./index.scss";

export default function Number(props) {
  let { value, placeholder, name, min, max, preffix, suffix, isSuffixPlural } =
    props;

  const [InputValue, setInputValue] = useState(`${preffix}${value}${suffix}`);

  const onChange = (e) => {
    let value = String(e.target.value);
    if (preffix) value = value.replace(preffix);
    if (suffix) value = value.replace(suffix);
    if (isNaN(value) || +value <= 0) value = min;
    if (+value > max) value = max;

    const patterNumeric = new RegExp("[0-9]*");
    const isNumeric = patterNumeric.test(value);
    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: value,
        },
      });
      setInputValue(
        `${preffix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`
      );
    }
  };

  const minus = () => {
    value =
      min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value =
      max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          className="form-control"
          placeholder={placeholder ? placeholder : "0"}
          value={String(InputValue)}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 2,
  preffix: "",
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  isSuffixPlural: propTypes.bool,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
