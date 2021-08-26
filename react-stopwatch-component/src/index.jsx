import React from 'react';
import ReactDOM from 'react-dom';
import { FaPlay, FaPause } from 'react-icons/fa';
import { BsCircle } from 'react-icons/bs';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, stopwatchOn: false, interval: 0 };
    this.handleReset = this.handleReset.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  render() {
    let element;
    if (!this.state.stopwatchOn) {
      element = (
      <div>
        <div className="row">
          <h1>{this.state.counter}</h1>
          < BsCircle onClick={this.handleReset} className="stopwatch" />
        </div>

        <div className="row" >
          <FaPlay onClick={this.handlePlayPause} className="play-pause"/>
        </div>
      </div>);
    } else {
      element = (<div>
        <div className="row">
          <h1>{this.state.counter}</h1>
          < BsCircle onClick={this.handleReset} className="stopwatch" />
        </div>

        <div className="row"><FaPause onClick={this.handlePlayPause} className="play-pause" /></div>
      </div>);
    }
    return element;
  }

  handlePlayPause() {

    this.setState(prevState => ({
      stopwatchOn: !prevState.stopwatchOn
    }));
    if (this.state.stopwatchOn) {
      clearInterval(this.state.interval);
    } else {
      let curCounter = this.state.counter;
      this.setState({
        interval: setInterval(() => {
          curCounter++;

          this.setState({ counter: curCounter });
        }, 1000)
      });
    }
  }

  handleReset() {
    this.setState({ counter: 0 });
    clearInterval(this.state.interval);
  }
}

ReactDOM.render(<Stopwatch />, document.getElementById('root'));
