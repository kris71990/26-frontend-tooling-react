import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';

import './style/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: cowsay.think({ text: faker.lorem.words() }),
    };

    this.generateLorem = this.generateLorem.bind(this);
  }

  generateLorem() {
    const text = cowsay.say({ 
      text: faker.lorem.words(),
      e: '00',
      T: 'u',
    });

    this.setState(() => {
      return {
        content: text,
      };
    });
  }

  render() {
    return (
      <div>
        <h1> Generate Cowsay Lorem </h1>
        <pre>{ this.state.content }</pre>
        <button onClick={ this.generateLorem }>Click me</button>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
