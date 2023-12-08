import { ActivityIndicator } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen'
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
import {useFonts} from 'expo-font'
import {useState} from 'react'

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')

  const [fontLoaded] = useFonts ({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  return (
    <>{
      categorySelected
        ?
        <ProductsByCategoryScreen category={categorySelected} />
        :
        <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
      }
    </>
   
  );
}

