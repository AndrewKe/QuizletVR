import React from 'react';
import {
  asset,
  StyleSheet,
  Pano,
  Text,
  VrButton,
  View,
  Image,
  Animated
} from 'react-vr';

export default class Term extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textColor: 'transparent',
      bounceValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    // this.state.bounceValue.setValue(1.5);     // Start large
    // Animated.spring(                          // Base: spring, decay, timing
    //   this.state.bounceValue,                 // Animate `bounceValue`
    //   {
    //     toValue: 0.8,                         // Animate to smaller size
    //     friction: 3,                          // Bouncier spring
    //   }
    // ).start();                                // Start the animation
  }

  render() {
    console.log(this.props.index);
    return (
      <View style>
        <Pano source={asset(this.props.card.url)}/>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 1, height: 1}} />
        <Text
          style={{
            padding: 0.02,
            textAlign:'center',
            textAlignVertical:'center',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 1, -5]}]
          }}>
          {this.props.card.key + " - " + this.props.card.value}
        </Text>

        <VrButton onClick = {() => {this.props.onClick(); this.animate()}}>
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
          {this.props.index == 3  ? "Finish" : "Next"}

        </Text>
        </VrButton>
      </View>
    );
  }
};
