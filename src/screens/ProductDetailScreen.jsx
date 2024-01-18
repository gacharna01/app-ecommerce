import {View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, useWindowDimensions, ScrollView} from 'react-native'
import products_data from '../data/products_data.json'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { useSelector, useDispatch } from 'react-redux'
import { setProductSelected } from '../features/shopSlice'
//import Carousel from '../components/Carousel'
import { addItem } from '../features/cartSlice'

const ProductDetailScreen = ({route}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isPortrait, setIsPortrait] = useState(true)

    const { height, width } = useWindowDimensions()

    const productId = route.params

    const productSelected = useSelector(state=>state.shopReducer.productSelected)

    useEffect(() => {
        height < width ? setIsPortrait(false) : setIsPortrait(true)
      }, [height])
    

    useEffect(()=>{
        setIsLoading(false)
    }
    ,[productId])

    const dispatch = useDispatch()

    const onAddToCart = () =>{
      dispatch(addItem({...productSelected, quantity: 1}))
    }

    return(
        <>
        {
        isLoading
        ?
        <ActivityIndicator />
        :
        <>
       
            <ScrollView >
              <Image
                  source={{ uri: productSelected.images[0] }}
                  resizeMode='cover'
                  style={isPortrait ? styles.imageProduct : styles.imageProductLandscape}
                />
              {/* <Carousel /> */}
              <View style={styles.detailContainer}>
                <Text style={styles.title}>{productSelected.title}</Text>
                <Text style={styles.description}>{productSelected.description}</Text>
                <Text style={styles.price}>$ {productSelected.price}</Text>
                <TouchableOpacity style={isPortrait ? styles.buyButton : styles.buyAlt} onPress={onAddToCart}>
                  <Text style={styles.buyText}>Agregar al carrito</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            </>
        }
        
        </>
    )
}

export default ProductDetailScreen 

const styles = StyleSheet.create({
  imageProduct: {
    minWidth: 300,
    width: '100%',
    height: 400,

  },
  imageProductLandscape: {
    width: 200,
    height: 200,
  },
  detailContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: 'grey',
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  buyText: {
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  }
  })