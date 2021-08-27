import React from 'react';
import ReactDOM from 'react-dom';

const topics = [
  { id: '001', topicName: 'Bulbasaur', details: '' },
  { id: '004', topicName: 'Bulbasaur', details: '' }
  // { id: '001', topicName: 'Bulbasaur', details: '' },
  // { id: '001', topicName: 'Bulbasaur', details: '' },
  // { id: '001', topicName: 'Bulbasaur', details: '' }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const listItems = topics.map(topic =>
      <li key={topic.id}><button>{topic.topicName}</button></li>);
    return (<ul>{listItems}</ul>);

    // const topicButtons = topics.map((topic) =>
    // {
    //   <button key={topic.id}>{pokemon.topic}</button>)
    // return (<ul>{topicButtons}</ul>)
    // });
  }

  handleClick() {

  }
}

ReactDOM.render(<Accordion />, document.getElementById('root'));
