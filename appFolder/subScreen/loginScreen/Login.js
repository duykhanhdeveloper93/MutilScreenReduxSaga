import React from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import Font from "../../Utils/Font"

const Login = ({navigation}) => {
    const onPress=()=>{
        navigation.navigate('Create')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.txtWellCome}>Welcome to tradly</Text>
            <Text style={styles.txtTitle}>Login to your account</Text>
            <TextInput style={styles.inputUser}
                placeholder=" Email/Mobile Number"
                placeholderTextColor={'white'} />
            <TextInput style={styles.inputUser}
                placeholder=" Password"
                placeholderTextColor={'white'} />
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtLogin}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.txtForgot}>Forgot your password ?</Text>
            <View style={styles.txtParentView}>
                <Text style={styles.txtDontHave}>Don’t have an account ? </Text>
                <Text 
                onPress={()=>onPress()}
                style={styles.txtSignIn}>Sign up</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Font.green,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtWellCome: {
        fontFamily: Font.fontMontserratBold,
        fontSize: Font.fontLarge,
        color: Font.white,
        marginVertical: RFValue(30)
    },
    txtTitle: {
        fontFamily: Font.fontMontserrat,
        fontSize: Font.fontSmall,
        color: Font.white
    },
    inputUser: {
        borderRadius: 20,
        borderColor: Font.white,
        borderWidth: 1,
        width: '90%',
        fontSize: Font.fontMedium,
        fontFamily: Font.fontMontserrat,
        marginTop: RFValue(20)
    },
    btnLogin: {
        borderRadius: 20,
        paddingVertical: RFValue(15),
        backgroundColor: Font.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginTop: RFValue(30)
    },
    txtLogin: {
        color: Font.lightGreen,
        fontFamily: Font.fontMontserrat,
        fontSize: Font.fontSmall
    },
    txtForgot: {
        fontFamily: Font.fontMontserrat,
        color: Font.white,
        fontSize: Font.fontMedium,
        marginVertical: RFValue(30)
    },
    txtParentView: {
        flexDirection: 'row',
         alignItems: 'center'
    },
    txtDontHave: {
        fontFamily: Font.fontMontserrat,
        fontSize: Font.fontMedium,
        color: Font.white
    },
    txtSignIn: {
        fontFamily: Font.fontMontserratBig,
        fontSize: Font.fontMedium,
        color: Font.white
    }

})
export default Login