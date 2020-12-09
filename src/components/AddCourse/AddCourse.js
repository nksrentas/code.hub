import React, { useState } from 'react';
import { Button, Form, Jumbotron, Label } from 'reactstrap';
import FormCustomCheckInput from './FormCustomCheckInput';
import FormCustomMultiCheck from './FormCustomMultiCheck';
import FormCustomTextInput from './FormCustomTextInput';

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    imagePath: '',
    open: false,
    instructors: [],
    description: '',
    price: {
      normal: null,
      early_bird: null,
    },
    dates: {
      start_date: '',
      end_date: '',
    },
  });

  const updateFormData = (newValueObject) => {
    setFormData({
      ...formData,
      ...newValueObject,
    });
  };
  const handleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    setFormData((prevState) => {
      console.log(prevState.instructors);
      let instructors = prevState.instructors;
      if (checked) {
        instructors.push(value);
      } else {
        const index = instructors.indexOf(value);
        if (index > -1) {
          instructors.splice(index, 1);
        }
      }
      return {
        ...prevState,
        instructors,
      };
    });
  };

  const formDataArray = Object.keys(formData);
  const instructors = ['Jonh Tsevdos', 'Yiannis Nikolakopoulos'];
  return (
    <Jumbotron>
      <Form>
        <h2>Add Course</h2>
        {formDataArray.slice(0, 3).map((formInput, index) => {
          let firstUpper =
            formInput.charAt(0).toUpperCase() + formInput.slice(1);
          return (
            <FormCustomTextInput
              key={index}
              title={`${firstUpper}: `}
              name={formInput}
              type='text'
              value={formData[formInput]}
              setValue={updateFormData}
            />
          );
        })}
        <FormCustomCheckInput
          title={'Bookable '}
          name={'open'}
          value={formData.open}
          setValue={updateFormData}
        />
        <hr />
        <h2>Instructors</h2>
        <FormCustomMultiCheck
          name='Instructors'
          options={instructors}
          array={formData.instructors}
          onChange={handleChange}
        />
        <hr />
      </Form>
    </Jumbotron>
  );
};

export default AddCourse;
