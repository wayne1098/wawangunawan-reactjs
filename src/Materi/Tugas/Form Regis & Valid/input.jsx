import React from 'react';
const input = ({ label, type, name, onChange }) => {
    return (
      <div>
        <label>{label}:</label>
        <br />
        <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
        <br />
      </div>
    );
  };

export default class Input extends React.Component {
  render() {
    const style = {
        padding: '10px',
        width: '600px',
        margin: '100px auto 0',
        border: '10px solid black',
      };
      return (
        <div style={style}>
          <h4 style={{ textAlign: 'center' }} />
            {/* Form Registrasi :</h4> */}
          <div style={{ fontSize: 12, color: 'red' }} />
            {/* * Wajib diisi</div> */}
          <br />
          <form ref={(z) => (this.form = z)} onSubmit={this.handleSubmit}>
            <input type="text" name="nama" label="Name" onChange={(value) => this.setState({ name: value })} />
            <div style={{ fontSize: 12, color: 'red' }}>{this.state.nameError}</div>
            <input type="text" name="phonenumber" label="Phone Number" onChange={(value) => this.setState({ phonenumber: value })} />
            <div style={{ fontSize: 12, color: 'red' }}>{this.state.phonenumberError}</div>
            <input type="email" name="email" label="Email" onChange={(value) => this.setState({ email: value })} />
            <div style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</div>
            <input type="password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} />
            <div style={{ fontSize: 12, color: 'red' }}>{this.state.passwordError}</div>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
  }