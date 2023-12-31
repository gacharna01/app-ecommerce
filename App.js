import { ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font'
import TabNavigator from './src/navigation/TabNavigator'; 
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {

  const [fontLoaded] = useFonts ({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  return (
    <Provider store={store}>
    <TabNavigator />
    </Provider>
  );
}

