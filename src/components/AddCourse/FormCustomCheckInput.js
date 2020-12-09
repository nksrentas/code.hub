import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const FormCustomCheckInput = ({ title, name, value, setValue }) => {
  return (
    <FormGroup check>
      <Label check>
        <Input
          type='checkbox'
          name={name}
          onChange={(e) => setValue({ [name]: e.target.checked })}
        />
        {title}
      </Label>
    </FormGroup>
  );
};

export default FormCustomCheckInput;
