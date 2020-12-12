import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Form, Alert } from 'react-bootstrap';
import Datetime from 'react-datetime';
import {createRecord} from '../../api/';
import moment from 'moment';
import 'moment/locale/uk';
const mapStateToProps = state => {
  return {
  };
};

export const requiredFields = {
  record_dt: 'Зповніть дату',
  name: "Заповніть ім'я клієнта",
  inst: 'Зповніть інсту',
  price: 'Зповніть ціну',
  procedure: 'Зповніть назву процедури',
}

class NewRecord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      record_dt: '',
      name: '',
      procedure: '',
      inst: '',
      phone_number: '',
      price: '',
      showErrors: false,
      errors: [],
    };
  }

  onChangeDateTime = e =>{
    this.setState({record_dt: moment(e).format('DD.MM.YYYY H:mm')})
  }

  onChangeField = ({target: { name, value }}) =>{
    this.setState({[name]: value})
  }

  onSubmit = () => {
    const {
      record_dt,
      name,
      procedure,
      inst,
      phone_number,
      price
    } = this.state
    console.log(this.state['record_dt'])
    const errors = []
    Object.keys(requiredFields).map(requiredField => {
      // console.log(`${requiredField}`, this.state[requiredField])
      if(this.state[`${requiredField}`] === '') {
        console.log('here', requiredFields[requiredField])
        errors.push(requiredFields[requiredField])
      }
    })
    if (errors.length !== 0) {
      this.setState({errors})
    } else {
      createRecord({record_dt,
        name,
        procedure,
        inst,
        phone_number,
        price})
    }
    document.location.href="/";
  }

  render() {
    const {errors} = this.state;
    const errorMessages = (
      <div>
        {errors.map((field, idx) => (
          <Alert key={idx} variant='danger'>
            {field}
          </Alert>
          ))}
      </div>
    )
    return (
      <div className="container">
        <h1>Новий запис</h1>
        <div className="new-record-form-wrapper">
          {errors.length !== 0 && errorMessages}
          <Form>
            <Form.Group controlId="procedureDate">
              <Form.Label>Дата процедури</Form.Label>
              <Datetime onChange={this.onChangeDateTime} locale="uk"/>
            </Form.Group>

            <Form.Group controlId="customerName">
              <Form.Label>Ім'я клієнта</Form.Label>
              <Form.Control onChange={this.onChangeField} name="name" type="name" placeholder="Введіть ім'я" />
            </Form.Group>

            <Form.Group controlId="procedureName">
              <Form.Label>Назва процедури</Form.Label>
              <Form.Control onChange={this.onChangeField} name="procedure" type="name" placeholder="Введіть назву процедури" />
            </Form.Group>

            <Form.Group controlId="customerInst">
              <Form.Label>Інстаграм</Form.Label>
              <Form.Control onChange={this.onChangeField} name="inst" type="name" placeholder="Введіть інстаграм" />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Номер телефону</Form.Label>
              <Form.Control onChange={this.onChangeField} name="phone_number" type="name" placeholder="Введіть номер телефону" />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Ціна процедури</Form.Label>
              <Form.Control onChange={this.onChangeField} required name="price" type="name" placeholder="Введіть ціну" />
            </Form.Group>

            <Button variant="primary" onClick={this.onSubmit}>
              Додати запис
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewRecord);