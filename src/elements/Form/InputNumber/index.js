import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default function InputNumber(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
    props;

  const [inputValue, setInputValue] = useState(`${prefix}${value} ${suffix}`);

  const _onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix).trim();

    const patternNumeric = new RegExp('[0-9]*');
    const isNumeric = patternNumeric.test(value);

    // +value ==> shorthand dari Number(value)
    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
      setInputValue(
        `${prefix}${value} ${suffix}${isSuffixPlural && value > 1 ? 's' : ''}`
      );
    }
  };

  const minus = () => {
    value > min &&
      _onChange({
        target: {
          name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      _onChange({
        target: {
          name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={['input-number mb-3', props.outerClassName].join(' ')}>
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
          placeholder={placeholder ? placeholder : '0'}
          value={String(inputValue)}
          onChange={_onChange}
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

InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: '',
  suffix: '',
};

InputNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
  isSuffixPlural: PropTypes.bool,
};
