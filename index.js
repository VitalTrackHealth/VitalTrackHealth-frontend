import { registerRootComponent } from 'expo';
console.log('index.js');
import App from './App';

//import Login from "./login";
import welcome from "./screens/welcome";
//import register from "./screens/register";

export {
   // login,
    welcome
 //   register
}
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
