import React from "react"
import {View, Text, StyleSheet, Image} from 'react-native'

const Introduce1 = () => {

    var styles = StyleSheet.create({
        containerGreen: {
            flex: 1,
            backgroundColor: '#33907C'
        },
        containerWhite: {
            flex: 1,
            backgroundColor: 'white'
        },
        imageStyle1: {
            alignSelf: 'center',
            position: 'absolute',
            top: -100,
            right: 0,
            left: 50
        }
    });


    return (
        <View style={{flex: 1}}>
            
            <View style={styles.containerGreen}>
               
            </View>
            <View style={styles.containerWhite}>
                <Image  style={styles.imageStyle1} source={require('../../source/introduceScreen/part21/img1/img.png')} />
                <Text></Text>
            </View>
        </View>
    )
}

export default Introduce1