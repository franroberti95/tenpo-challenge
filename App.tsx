import React from 'react';
/**
 * react-native-gesture-handler is a dependency for @react-navigation/stack to work.
 *
 * To finalize installation of react-native-gesture-handler,add the following at the top
 * (make sure it's at the top and there's nothing else before it) of your entry file, such
 * as index.js or App.js.
 * **/
import 'react-native-gesture-handler';
import Navigation from './navigation';
import {ThemeProvider} from 'styled-components/native';
import {mainTheme} from './styles/theme';

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Navigation />
  </ThemeProvider>
);

export default App;
