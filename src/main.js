import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';

import './style/main.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Cowsay Lorem</h1>
      </header>
    );
  }
}


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
        <Header/>
        <pre>{this.state.content}</pre>
        <button onClick={this.generateLorem}>Click me</button>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
