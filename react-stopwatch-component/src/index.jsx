import React from 'react';
import ReactDOM from 'react-dom';
import { FaPlay, FaPause } from 'react-icons/fa';
import { BsCircle } from 'react-icons/bs';
import { interval } from 'rxjs';

class Stopwatch extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { stopwatchOn: false};
    this.handleClickStopWatch = this.handleClickStopWatch.bind(this);
    this.handleClickPlayPause = this.handleClickPlayPause.bind(this);
  }
  render()
  {
    let counter = 0;
    let element;
    let interval = null;

    if(!this.state.stopwatchOn)
    {
      clearInterval(interval);
      element =
        <div>
          <div className="row">
            <h1>{counter}</h1>
            <BsCircle onClick={this.handleClickStopWatch} className="stopwatch" />
          </div>
          <div className="row">
            <FaPlay onClick={this.handleClickPlayPause} className="play-pause" />
          </div>
        </div>;
    }else
    {
      interval = setInterval(() => {
        console.log("hi");
        counter+=1;
        console.log(counter);}
        , 1000);
      element =
        <div>
          <div className="row">
            <h1>{counter}</h1>
            <BsCircle onClick={this.handleClickStopWatch} className="stopwatch" />
          </div>
          <div className="row">
            <FaPause onClick={this.handleClickPlayPause} className="play-pause" />
          </div>
        </div>;
    }
    return element;

  }
  handleClickPlayPause()
  {
    this.setState((prevState) => ({
      stopwatchOn: !prevState.stopwatchOn
    }));
    clearInterval(interval);
  }
  handleClickStopWatch()
  {
    console.log("reset button is pressed!");
  }
  upadteTime()
  {

  }
}


ReactDOM.render(<Stopwatch />, document.getElementById('root'));
