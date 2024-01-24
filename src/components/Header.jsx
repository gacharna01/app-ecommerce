import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import { deleteSession } from '../db';

const Header = ({title, navigation}) => {

  const email = useSelector(state=>state.authReducer.user)
  const localId = useSelector(state=>state.authReducer.localId)
  const dispatch = useDispatch()
  const onLogout = ()=>{
      dispatch(logout())
      const deletedSession = deleteSession(localId)
      console.log("Sesión eliminada: ", deletedSession)
  }

  
  return (
    <View style={styles.headerContainer}>
      {
         navigation.canGoBack()
         ?
         <>
         <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="caretleft" size={20} color="white" />
        </TouchableOpacity>

      <TouchableOpacity onPress={navigation.popToTop} >
        <AntDesign style={styles.headerHome} name="home" size={26}  />
      </TouchableOpacity>
        </>
        :
        <View></View>
      }
      <Text style={styles.headerTitle}>{title}</Text>
      {
        email
        &&
        <TouchableOpacity onPress={onLogout}>
            <AntDesign name="logout" size={20} color="white" />
        </TouchableOpacity>
      }
        
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
      left: 150,
      color: colors.secondary,
    }
})