import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const FormCustomMultiCheck = ({ options, name, array, onChange }) => {
  return options.map((option, index) => {
    return (
      <FormGroup check key={option}>
        <Label style={{ textTransform: 'capitalize' }} check>
          <Input
            type='checkbox'
            value={`0${index + 1}`}
            name={name}
            // eslint-disable-next-line eqeqeq
            checked={array.some((elem) => elem == index + 1)}
            onChange={onChange}
          />
          {option}
        </Label>
      </FormGroup>
    );
  });
};

export default FormCustomMultiCheck;
