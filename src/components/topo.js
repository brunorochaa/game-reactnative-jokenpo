import React, { Component } from 'react';
import { View, Image } from 'react-native';

const image = require('../../img/topo.png');

class Topo extends Component {
    render() {
      return (
        <View>
          <Image source={image}
            style={{ width: 360, height: 300, resizeMode: Image.resizeMode.contain }}
          />            
        </View>
      );
    }
}
  
export default Topo;
