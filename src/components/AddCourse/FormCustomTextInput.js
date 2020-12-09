import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const FormCustomTextInput = ({ title, type, name, value, setValue }) => {
  return (
    <FormGroup>
      <Label for='title'>{title}</Label>
      <Input
        type={type}
        name={name}
        id='exampleEmail'
        value={value}
        placeholder={title}
        onChange={(e) => setValue({ [name]: e.target.value })}
      />
    </FormGroup>
  );
};

export default FormCustomTextInput;
