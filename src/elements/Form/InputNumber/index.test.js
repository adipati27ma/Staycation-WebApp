import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputNumber from './index';

const TestInput = () => {
  const [state, setState] = useState({ value: '' });

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  return (
    <InputNumber
      max={30}
      onChange={handleChange}
      name="value"
      value={state.value}
    />
  );
};

const setupElement = () => {
  const { container } = render(<TestInput />);
  const input = container.querySelector("input.form-control[name='value']");

  return { input };
};

test('Should able to change value', () => {
  const { input } = setupElement();

  fireEvent.change(input, { target: { value: 23 } });
  expect(input.value).toBe('23');
});

test('Should not be able to change when reach max value', () => {
  const { input } = setupElement();

  fireEvent.change(input, { target: { value: 33 } });
  expect(input.value).toBe('');
});
