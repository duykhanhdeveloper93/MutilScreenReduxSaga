import React from "react"
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from "react-native"
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import Font from "../../Utils/Font"

const Introduce1 = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}></View>
            <View style={styles.bodyView}>
                <View style={styles.viewAdd}></View>
                <Text style={styles.txtTittle}>Empowering Artisans,</Text>
                <Text style={styles.txtTittle}> Farmers & Micro Business</Text>
                <Image
                    source={require('../../source/introduceScreen/part21/img2/DotDotDot.png')}
                    resizeMode="contain"
                    style={styles.icon} />
            </View>
            <View style={styles.imgParentView}>
                <View style={styles.imgBackGround}>
                    <Image
                        source={require('../../source/introduceScreen/part21/img1/img.png')}
                        resizeMode="contain" />
                </View>
            </View>
            <View
                style={styles.btnParentView}>
                <TouchableOpacity
                    onPress={() => props.onPress1()}
                    style={styles.touchableOpacityStyle}>
                    <Text style={styles.textTouchStyle}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    topView: {
        height: '40%',
        backgroundColor: Font.green
    },
    bodyView: {
        height: '60%',
        backgroundColor: Font.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtTittle: {
        fontFamily: Font.fontMontserratBold,
        fontSize:Font.fontLarge,
        color: Font.green,

    },
    touchableOpacityStyle: {
        backgroundColor: Font.green,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTouchStyle: {
        color: Font.white,
        fontFamily: Font.fontMontserratBig,
        fontSize:Font.fontLarge,
        padding: 9,
        marginBottom: RFValue(5),

    },
    icon: { marginVertical: RFValue(30) },
    viewAdd: { height: '30%' },
    imgParentView: {
        position: 'absolute',
        backgroundColor: 'transparent',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFValue(-150),
        zIndex: 998
    },
    imgBackGround: {
        paddingVertical: RFValue(20),
        backgroundColor: Font.white,
        borderRadius: 20
    },
    btnParentView:
    {
        width: '100%',
        position: 'absolute',
        bottom: RFPercentage(2),
        zIndex: 999
    }

})
export default Introduce1