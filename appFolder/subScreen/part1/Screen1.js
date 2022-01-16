import React from "react"
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'


const Screen1 = () => {

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
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.centerView}>
                <Image  resizeMode="contain" style={styles.tImageStyle} source={require('../../source/part1/TImage/img.png')} />
                <Text style={{color: 'white', fontSize: 30}}>Tradly</Text>
            </View>

        </View>

    )
}

export default Screen1