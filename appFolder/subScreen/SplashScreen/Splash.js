import React from "react"
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#33907C'
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      
        alignSelf: 'center',
        alignContent: 'center',
    },
});

const Splash = ({navigation}) => {


    const nextPage = () => {
        console.log("to introduce")
        navigation.navigate('Introduce') 
    }
    setTimeout(nextPage, 5000)

    return (
        <View style={styles.container}>
            <View style={styles.centerView}>
                <Image  resizeMode="contain" style={styles.tImageStyle} source={require('../../source/splashScreen/TImage/img.png')}  />
                <Text onPress={() => nextPage()} style={{color: 'white', fontSize: 30}} >Tradly</Text>
            </View>

        </View>

    )

  
}

export default Splash