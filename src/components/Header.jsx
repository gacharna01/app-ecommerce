import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import {colors} from '../global/colors'
import { AntDesign } from '@expo/vector-icons';

const Header = ({title, navigation}) => {
  
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="caretleft" size={20} color="white" />
        </TouchableOpacity>

      <TouchableOpacity onPress={navigation.popToTop} >
        <AntDesign style={styles.headerHome} name="home" size={26}  />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        
        height: 100,
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: colors.secondary,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
    headerHome: {
      position: 'absolute',
      top: 1, 
      left: 100,
      color: colors.secondary,
    }
})