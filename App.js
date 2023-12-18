import { ActivityIndicator } from 'react-native';
import Navigator from './src/navigation/Navigator';
import {useFonts} from 'expo-font'
import {useState} from 'react'

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)

  const [fontLoaded] = useFonts ({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  const onReturnHome = () => {
    setCategorySelected("");
  }

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId)
  }

  return (
    <Navigator />
   
  );
}

