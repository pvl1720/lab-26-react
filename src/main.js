import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import {say} from 'cowsay';
import './style/main.scss';
const faker = require('faker');
import { think, SQUIRREL } from 'cowsay';

console.log(think({
  text: 'chillin in da browser',
  cow: SQUIRREL,
  eyes: 'DD',
  tongue: ';;',
}));

class Header extends React.Component {

  constructor(props){
     super(props);
   }

  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem </h1>
      </header>
    )
  }

}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          content: 'I\'m a cow, not a squirrel!',

        };

        this.handleCow = this.handleCow.bind(this);
    }

    handleCow(e) {
      const content = faker.fake('{{lorem.sentence}}');
      this.setState({content: faker.fake('My name is {{name.firstName}}, {{name.lastName}} {{name.suffix}}!') });
    }


    render() {
        return (
            <div>
                <Header />
                <div id="root">
                  <button onClick={this.handleCow}>Click the Button!</button>
                  <pre>
                {say({ text: this.state.content})}
              </pre>
                </div>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
