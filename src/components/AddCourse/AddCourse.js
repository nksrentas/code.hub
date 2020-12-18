import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Button, Form, Jumbotron, Label, Input, FormGroup } from 'reactstrap';
import FormCustomCheckInput from './FormCustomCheckInput';
import FormCustomMultiCheck from './FormCustomMultiCheck';
import FormCustomTextInput from './FormCustomTextInput';
import axios from 'axios';
import { API_URL } from '../../config';
import { useHistory } from 'react-router-dom';

const AddCourse = forwardRef((props, ref) => {
  let history = useHistory();
  let { initialState } = props;

  let data = initialState
    ? initialState
    : {
        title: '',
        duration: '',
        imagePath: '',
        open: false,
        instructors: [],
        description: '',
        price: {
          normal: 0,
          early_bird: 0,
        },
        dates: {
          start_date: '',
          end_date: '',
        },
      };
  const [formData, setFormData] = useState(data);

  useImperativeHandle(ref, () => ({
    kappa: () => {
      axios
        .put(`${API_URL}/courses/${formData.id}`, formData)
        .then((res) => {
          console.log('Post response', res);
          history.push('/courses');
        })
        .catch((err) => {
          console.error(err);
        });
    },
  }));

  const handleSudmit = (e) => {
    e.preventDefault();
    // post request
    axios
      .post(`${API_URL}/courses`, formData)
      .then((res) => {
        console.log('Post response', res);
        history.push('/courses');
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
      <Form onSubmit={handleSudmit}>
        <h2>{initialState ? 'Edit Course' : 'Add Course'}</h2>
        {formDataArray.slice(0, 3).map((formInput, index) => {
          let firstUpper =
            formInput.charAt(0).toUpperCase() + formInput.slice(1);
          return (
            <FormCustomTextInput
              key={index}
              title={`${firstUpper} `}
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
        <FormGroup>
          <Label for='exampleText'>Description</Label>
          <Input
            type='textarea'
            name='text'
            id='exampleText'
            rows='7'
            value={formData.description}
            onChange={(e) => updateFormData({ description: e.target.value })}
          />
        </FormGroup>
        <hr />
        <h2>Dates</h2>
        <FormGroup>
          <Label for='start-date'>Start date</Label>
          <Input
            type='text'
            name='start-date'
            value={formData.dates.start_date}
            placeholder='Start date'
            onChange={(e) =>
              updateFormData({
                dates: { ...formData.dates, start_date: e.target.value },
              })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for='end-date'>End date</Label>
          <Input
            type='text'
            name='end-date'
            value={formData.dates.end_date}
            placeholder='End date'
            onChange={(e) =>
              updateFormData({
                dates: { ...formData.dates, end_date: e.target.value },
              })
            }
          />
        </FormGroup>
        <h2>Price</h2>
        <FormGroup>
          <Label for='early_bird'>Early Bird</Label>
          <Input
            type='number'
            name='early_bird'
            value={formData.price.early_bird}
            onChange={(e) =>
              updateFormData({
                price: { ...formData.price, early_bird: e.target.value },
              })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for='price'>Normal price</Label>
          <Input
            type='number'
            name='price'
            value={formData.price.normal}
            placeholder='End date'
            onChange={(e) =>
              updateFormData({
                price: { ...formData.price, normal: e.target.value },
              })
            }
          />
        </FormGroup>
        {initialState ? (
          ''
        ) : (
          <div>
            <hr />
            <Button type='submit' color='primary' className='float-right'>
              Add course
            </Button>
          </div>
        )}
      </Form>
    </Jumbotron>
  );
});

export default AddCourse;
