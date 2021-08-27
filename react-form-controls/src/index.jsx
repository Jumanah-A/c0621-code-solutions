import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const element =
      <form onSubmit={this.handleSubmit}>
        <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChange}></input>
        </label>
        <button type="submit">Sign Up</button>
      </form>;

    return element;
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    console.log('State:', this.state);
    event.preventDefault();
  }
}

ReactDOM.render(<NewsletterForm />, document.getElementById('root'));
