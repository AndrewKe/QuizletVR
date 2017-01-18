import React from 'react';
import {
  asset,
  StyleSheet,
  Pano,
  Text,
  VrButton,
  View,
  Image
} from 'react-vr';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {textColor: 'transparent'}
  }
  render() {
    return (
      <View style>
        <Pano source={asset(this.props.index + ".png")}/>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 1, height: 1}} />
        <Text
          style={{
            padding: 0.02,
            textAlign:'center',
            textAlignVertical:'center',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 1, -5]}],
          }}>
          {this.props.card.key + " - " + this.props.card.value}
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
            transform: [{translate: [0, 1, -4]}]
          }}>
          {}
          Next
        </Text>
        </VrButton>
      </View>
    );
  }
};
