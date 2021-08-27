import React from 'react';
import ReactDOM from 'react-dom';

const topics = [
  { id: '001', topicName: 'HTML', details: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.' },
  { id: '004', topicName: 'JavaScript', details: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions' },
  { id: '002', topicName: 'CSS', details: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript' }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, current: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const listItems = topics.map(topic =>
      <li className="description" key={topic.id}>
        <button data-topicid ={topic.id} onClick={this.handleClick}>{topic.topicName}</button>
        {(this.state.isClicked) && (this.state.current === topic.id) &&
          <p>{topic.details}</p>
        }
      </li>);
    return (<ul>{listItems}</ul>);
  }

  handleClick(event) {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
    this.setState({ current: event.target.dataset.topicid });
  }
}

ReactDOM.render(<Accordion />, document.getElementById('root'));
