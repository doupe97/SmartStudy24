import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { LogBox } from 'react-native';
import Navigation from './src/screens/start/Navigation';

LogBox.ignoreAllLogs();
Amplify.configure(awsconfig);

const App = () => {

  return (
    <Navigation />
  );

};

export default App;