import React from 'react';
import ReactDOM from 'react-dom';
import { BsCircle, BsCircleFill } from 'react-icons/bs';
import { GrNext, GrPrevious } from 'react-icons/gr';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.state = { current: this.props.images[0].imageid, currentUrl: this.props.images[0].url, currentIndex: 0};
  }

  render() {
    // let currentId = this.state.current;
    // let currentImage;
    const listItems = this.props.images.map(image =>
      <span key={image.id}>
        {(this.state.current === image.id) &&
        <div>
          <BsCircleFill key={image.id} data-imageid={image.id} data-imageurl={image.url} onClick={this.handleClick} data-index={this.props.images.indexOf(image)} />
        </div>

      }
      {(this.state.current !== image.id) &&
          <BsCircle key={image.id} data-imageid={image.id} data-imageurl={image.url} onClick={this.handleClick} data-index={this.props.images.indexOf(image)}/>
        }
      </span>);

    const element =
      <div className="carousel-border">
        <div>
          <div className='row center'>
            <div className='icon'>
                <GrPrevious onClick={this.handleArrowClick}/>
            </div>
            <div className='image'>
              <img src={this.state.currentUrl}></img>
            </div>
            <div className='icon'>
                <GrNext onClick={this.handleArrowClick}/>
            </div>
          </div>
        </div>
        <div className='center'>
          <div className='progress'>{listItems}</div>
        </div>
      </div>;

    return element;
  }

  handleClick(event) {
    console.log(event.target);
    const dataset = event.target.dataset;
    this.setState({ current: dataset.imageid, currentUrl: dataset.imageurl, currentIndex: dataset.index});
    console.log(this.state);
  }

  handleArrowClick(event) {
    // console.log(event.target)
  }
}

const images = [
  { id: '001', url: '../images/001.png' },
  { id: '002', url: '../images/004.png' },
  { id: '003', url: '../images/007.png' },
  { id: '004', url: '../images/025.png' },
  { id: '005', url: '../images/039.png' }
];
ReactDOM.render(<Carousel images={images}/>, document.getElementById('root'));
