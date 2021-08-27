import React from 'react';
import ReactDOM from 'react-dom';
import { ImCross, ImCheckmark } from 'react-icons/im';

class PasswordValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', message: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  render() {
    const element =
      <form onSubmit={this.handleSubmit}>
        <div>
            Password:
        </div>
        <div>
          <label>
              <input type="password" value={this.state.email} onChange={this.handleChange}></input>
          </label>
          {(this.state.password === '') &&
            <span>
              <span className="icon"><ImCross className='cross' /></span>
              <div><p className="error">A password is required.</p></div></span>
          }
          {((this.state.password.length < 8 && this.state.password !== '')) &&
            <span>
              <span className="icon"><ImCross className='cross' /></span>
            <div><p className="error">Your password is too short.</p></div></span>
          }
          {(this.state.password.length >= 8) &&
              <span className="icon"><ImCheckmark className='check' /></span>
          }
        </div>

      </form>;
    return element;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }
}

ReactDOM.render(<PasswordValidation/>, document.getElementById('root'));
