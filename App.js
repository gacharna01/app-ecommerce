import { ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font'
import TabNavigator from './src/navigation/TabNavigator'; 


export default function App() {

  const [fontLoaded] = useFonts ({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  return (
    <TabNavigator />
  );
}

