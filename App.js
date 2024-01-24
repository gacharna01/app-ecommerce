import { ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font'
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';

export default function App() {

  init()
  .then(()=>console.log("Database initializated"))
  .catch((error)=>console.log("Initialize db failed: ", error))

  const [fontLoaded] = useFonts ({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  return (
    <Provider store={store}>
    <MainNavigator />
    </Provider>
  );
}

