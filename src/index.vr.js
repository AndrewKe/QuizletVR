import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

import Welcome from './Welcome'
import Term from './Term'

class QuizletVR extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      started: false,
      cards: [
        {
          "key": "California",
          "value": "Sacramento",
          "url": "http://i.imgur.com/jN4P4XS.jpg"
        },
        {
          "key": "Oregon",
          "value": "Salem",
          "url": "http://i.imgur.com/D4gddpJ.jpg"
        },
        {
          "key": "Alaska",
          "value": "Juneau",
          "url": "http://i.imgur.com/J6o001O.jpg"
        },
        {
          "key": "Hawaii",
          "value": "Honolulu",
          "url": "http://i.imgur.com/IWNM7Jz.jpg"
        }
      ],
      index: 0
    }
  }
  render() {
    var component = undefined;

    if (this.state.started) {
      component = <Term index = {this.state.index} card = {this.state.cards[this.state.index]} onClick = {() => {
        if (this.state.index == 3) {
          this.state.started = false;
          this.state.index = -1;
        }
        this.setState({index: this.state.index+1})
      }}/>
    } else {
      component = <Welcome onClick = {() => {
        this.setState({started: true})
      }}/>
    }
    return component;
  }
};

AppRegistry.registerComponent('QuizletVR', () => QuizletVR);
