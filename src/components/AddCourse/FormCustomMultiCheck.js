import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const FormCustomMultiCheck = ({ options, name, array, onChange }) => {
  return (
    <FormGroup check>
      {options.map((option, index) => {
        return (
          <Label key={option} style={{ textTransform: 'capitalize' }} check>
            <Input
              type='checkbox'
              value={index + 1}
              name={name}
              onChange={onChange}
            />
            {option}
          </Label>
        );
      })}
    </FormGroup>
  );
};

export default FormCustomMultiCheck;
