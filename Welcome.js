import React from 'react';
import {
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  VrButton,
  Scene
} from 'react-vr';

export default class Welcome extends React.Component {

  constructor(props) {
    super(props)
    this.state = {textColor: 'transparent'}
  }
  render() {
    console.log(this.state.textColor);
    return (
      <View>
      <Pano source={asset('do1FUwo.jpg')} style = {{transform: [{rotateY : -85}]}}/>
        <Text
          style={{
            backgroundColor:'transparent',
            padding: 0.02,
            textAlign:'center',
            textAlignVertical:'center',
            fontSize: 0.6,
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -5]}],
          }}>
          Welcome to Quizlet VR (US Capitals)!
        </Text>

      <VrButton onClick = {() => this.props.onClick()}>
        <Text
          onEnter={() => this.setState({textColor: 'rgba(0, 255, 0, 0.3)'})}
          onExit={() => this.setState({textColor: 'transparent'})} style = {{
            backgroundColor: this.state.textColor,
            fontSize: 0.6,
            width: 1.5,
            textAlign: 'center',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -4]}]
          }}>
          Start
        </Text>
      </VrButton>

      </View>
    );
  }
};
