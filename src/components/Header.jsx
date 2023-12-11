import { StyleSheet, Text, View, Pressable } from 'react-native'
import {colors} from '../global/colors'
import { AntDesign } from '@expo/vector-icons';

const Header = ({title, returnHomeHandlerEvent}) => {
  
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Pressable onPress={returnHomeHandlerEvent} >
        <AntDesign style={styles.headerHome} name="home" size={26}  />
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: colors.text,
        fontFamily: 'Montserrat-Bold'
    },
    headerHome: {
      position: 'absolute',
      top: 1, 
      left: 150,
      color: colors.text,
    }
})