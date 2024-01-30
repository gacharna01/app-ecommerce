import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Card from './Card'
import {colors} from '../global/colors'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../features/shopSlice'

const CategoryItem = ({ category, navigation }) => {

    const dispatch = useDispatch()

  return (
    <TouchableOpacity onPress={()=>{
        navigation.navigate("products", {category})
        dispatch(setCategorySelected(category))
        }
        }>
        <Card style={styles.cardContainer}>
            <Text style={styles.text}>{category}</Text>
        </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.secondary,
        padding: 20,
        margin: 10,
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular'
    }
})