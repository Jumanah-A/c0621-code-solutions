import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const clicks = this.state.counter;
    let className1 = 'default';
    if (clicks > 3 && clicks <= 6) {
      className1 = 'lavender-button';
    } else if (clicks > 6 && clicks <= 9) {
      className1 = 'red-button';
    } else if (clicks > 9 && clicks <= 12) {
      className1 = 'orange-button';
    } else if (clicks > 12 && clicks <= 15) {
      className1 = 'yellow-button';
    } else if (clicks > 15) {
      className1 = 'white-button';
    }
    return <button className= {className1} onClick= {this.handleClick}>Hot Button</button>;
  }

  handleClick() {
    let newclicks = this.state.counter;
    newclicks++;
    this.setState({ counter: newclicks });
  }

}

ReactDOM.render(<HotButton />, document.getElementById('root'));
