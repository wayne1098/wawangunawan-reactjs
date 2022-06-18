import React from "react";

export default class Valid extends React.Component {
    state = {
      name: '',
      phonenumber: '',
      email: '',
      password: '',
      nameError: '',
      emailError: '',
      passwordError: '',
      phonenumberError: '',
    };
  
    validate = () => {
      let nameError = '';
      let phonenumberError = '';
      let emailError = '';
      let passwordError = '';
  
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(this.state.email).toLowerCase())) {
        emailError = 'Invalid email!';
      }
  
      if (!this.state.password) {
        passwordError = 'Password cannot be empty!';
      } else if (this.state.password.length < 8) {
        passwordError = 'Password minimum 8 characters!';
      }
  
      if (!this.state.name) {
        nameError = 'Name cannot be empty!';
      }
  
      if (!this.state.phonenumber) {
        phonenumberError = 'Phone number cannot be empty!';
      }
  
      if (!this.state.email) {
        emailError = 'Email cannot be empty!';
      }
      if (phonenumberError || emailError || nameError || passwordError) {
        this.setState({ phonenumberError, emailError, nameError, passwordError });
        return false;
      }
  
      return true;
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        alert(`
        Name: ${this.state.name}
        Phone Number: ${this.state.phonenumber}
        Email: ${this.state.email}
        Password: ${this.state.password}
        `);
        this.setState(
          {
            nameError: '',
            emailError: '',
            passwordError: '',
            phonenumberError: '',
          },
          () => console.log('Click recorded!')
        );
        this.formDini.reset();
      }
    };
}