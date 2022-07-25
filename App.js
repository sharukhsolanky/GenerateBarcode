import * as React from 'react';
import { View,LogBox } from 'react-native'
import Routes from './src/navigation/Routes';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';

const App = () => {
 
 
  return (
    <View style={{ flex: 1}}>
     <Routes />
    </View>
  )
}
export default App;