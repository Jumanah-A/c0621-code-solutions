import React from 'react';
import ReactDOM from 'react-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.container = 'container';
  }

  render() {
    const container = this.container;
    const element =
    <div className= {container}>
    <GiHamburgerMenu className='menu' onClick={this.handleClick}></GiHamburgerMenu>
    {this.state.menuOpen &&
      <div className='hamburger-menu'>
          <h2>Choose a Game</h2>
          <h4 onClick={this.handleTabClick}>The legend of Zelda</h4>
          <h4 onClick={this.handleTabClick}>A Link to the Past</h4>
          <h4 onClick={this.handleTabClick}>Ocarina of Time</h4>
          <h4 onClick={this.handleTabClick}>The Wind Waker</h4>
          <h4 onClick={this.handleTabClick}>Breath of the Wind</h4>
        </div>}
        <div className='homepage'><img src="../images/The_Legend_of_Zelda.svg.png"></img></div>
    </div>;
    return element;
  }

  handleClick(event) {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
    this.container = 'container backdrop';
  }

  handleTabClick(event) {
    this.container = 'container';
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  }
}

ReactDOM.render(<Drawer />, document.getElementById('root'));
