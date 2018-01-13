import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import {say} from 'cowsay';
import './style/main.scss';

class App extends React.Component {
  render() {
    return (
      <div>Hello World</div>
    )
  }

}

ReactDom.render(<App/>,document.getElementById('root'));
