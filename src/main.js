import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import {say} from 'cowsay';
import faker from 'faker';
import './style/main.scss';

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
          cow: SQUIRREL
        };

        this.handleCow = this.handleCow.bind(this);
        // this.updateState = this.updateState.bind(this);
    }

    handleCow(e) {
      // console.log('handle cow click me button');
      const content = faker.fake('{{lorem.sentence}}');
      this.setState({content: Lorem.paragraph(2, true)});
    }


    render() {
        return (
            <div>
                <Header />
                <div id="root">
                  <button onClick={this.handleCow}>Click Button!</button>
                  <pre>
                {say({ text: this.state.content})}
              </pre>
                </div>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
