/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './appFolder/mainScreen/Main';

AppRegistry.registerComponent(appName, () => Main);
