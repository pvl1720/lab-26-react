import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import {say} from 'cowsay';
import './style/main.scss';
const faker = require('faker');
import { think, SQUIRREL } from 'cowsay';


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
          content: 'Once Iwas a cow, now a squirrel!',
        };

        this.handleCow = this.handleCow.bind(this);
    }

    handleCow(e) {
      this.setState({content: faker.fake('My name is {{name.firstName}}, {{name.lastName}} {{name.suffix}}! My role is {{name.jobDescriptor}}') });
    }


    render() {
        return (
            <div>
                <Header />
                <div id="root">
                  <button onClick={this.handleCow}>Click the Button!</button>
                  <pre>
                {think({ text: this.state.content, cow: SQUIRREL, eyes: 'QQ'})}
              </pre>
                </div>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
