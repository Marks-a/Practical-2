import React from 'react';
import { Text, View,image, stylesheet,style } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello World from Group 10 group  </Text>
      <text>This is Ričards Vīdners Marks.Auzins and Kristaps Ciguzis first React Native application! </text>
      <image source= {{ uri: "http://picsum.photos/200/300" }} style={{ 
      width:300,
      height: 300, }}/>
    </View>
  )
}
export default HelloWorldApp;
