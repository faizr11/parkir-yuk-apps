import React from 'react';
import {AppRegistry} from 'react-native';
import Router from './src/routers/router';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';

const Main = () => {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
