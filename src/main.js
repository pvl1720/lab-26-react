import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import {say} from 'cowsay';
import faker from 'faker';
import './style/main.scss';

import { think, SQUIRREL } from 'cowsay';


class Header extends React.Component {

  render() {

    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
        <button type="button">Click Me!</button>
      </header>
    )
  }
}

// class App extends React.Component {
//
//     constructor(props) {
//     }
// }


ReactDom.render(<Header/>,document.getElementById('root'));
