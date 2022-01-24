import React from "react"
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native"
import { RFValue, RFPercentage } from "react-native-responsive-fontsize"
import Font from "../../Utils/Font"
const Introduce3 = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}></View>
            <View style={styles.bodyView}>
                <View style={styles.viewAdd}></View>
                <Text style={styles.text}> Donate, Invest & Support </Text>
                <Text style={styles.text}>infrastructure projects</Text>
                <Image source={require('../../source/introduceScreen/part23/dotDotDot3/dotDotDot3.png')}
                    resizeMode="contain"
                    style={styles.iconStyle} />

            </View>
            <View style={styles.imgParent}>
                <View style={styles.imgBackGround}>
                    <Image source={require('../../source/introduceScreen/part23/img/img.png')}
                        resizeMode="contain" />
                </View>
            </View>
            <View style={styles.btnParents}>
                <TouchableOpacity
                    onPress={() => props.onPress3()}
                    style={styles.touchStyles}>
                    <Text style={styles.textTouch}>End</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    imgParent: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 998,
        marginTop: RFValue(-180),
        alignSelf:'center'
    },
    topView: {
        height: '40%',
        backgroundColor: Font.green,
    },
    bodyView: {
        height: '60%',
        backgroundColor: Font.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewAdd: {
        height: '30%'
    },
    text: {
        fontFamily: Font.fontMontserratBold,
        fontSize: Font.fontLarge,
        color: Font.green
    },
    touchStyles: {
        borderRadius: 20,
        backgroundColor: Font.green,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    textTouch: {
        fontFamily: Font.fontMontserratBold,
        fontSize: Font.fontLarge,
        padding: 9,
        color: Font.white
    },
    iconStyle: { marginVertical: RFValue(30) },
    btnParents: {
        position: 'absolute',
        bottom: RFPercentage(2),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999
    },
    imgBackGround: {
        backgroundColor: Font.white,
        paddingHorizontal: RFValue(20),
        borderRadius: 10
    }

})
export default Introduce3