import React from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import Font from "../../Utils/Font"
const SignIn = ({ navigation }) => {
    const onPressText = () => {
        navigation.navigate('Login')
    };
    const onPressButton = () => {
        navigation.navigate('GetNumber')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.txtWellCome}>Welcome to tradly</Text>
            <Text style={styles.txtSignUp}>Signup to your account</Text>
            <TextInput
                placeholder=" First Name"
                placeholderTextColor={Font.white}
                style={styles.input} />
            <TextInput
                placeholder=" Last Name"
                placeholderTextColor={Font.white}
                style={styles.input} />
            <TextInput
                placeholder=" Email ID/Phone Number"
                placeholderTextColor={Font.white}
                style={styles.input} />
            <TextInput
                placeholder=" Password"
                placeholderTextColor={Font.white}
                style={styles.input}
                secureTextEntry={true} />
            <TextInput
                placeholder=" Re-enter Password"
                placeholderTextColor={Font.white}
                style={styles.input}
                secureTextEntry={true} />
            <TouchableOpacity
                onPress={onPressButton}
                style={styles.btnCreate}>
                <Text style={styles.txtButton}>Create</Text>
            </TouchableOpacity>
            <View style={styles.parentViewText}>
                <Text style={styles.txtHave}>Have an account ?</Text>
                <Text
                    onPress={onPressText}
                    style={styles.txtSignIn}> Sign in</Text>
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
        color: Font.white,
        fontFamily: Font.fontMontserratBold,
        fontSize: Font.fontBig,
        marginBottom: 50
    },
    txtSignUp: {
        fontFamily: Font.fontMontserrat,
        fontSize: Font.fontSmall,
        color: Font.white,
        marginBottom: 30
    },
    input: {
        color: Font.white,
        fontFamily: Font.fontMontserrat,
        fontSize: Font.fontMedium,
        borderColor: Font.white,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 20,
        width: '90%'
    },
    btnCreate: {
        backgroundColor: Font.white,
        borderRadius: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtButton: {
        color: Font.lightGreen,
        fontFamily: Font.fontMontserratBig,
        fontSize: Font.fontSmall,
        padding: 15
    },
    txtHave: {
        fontFamily: Font.fontMontserrat,
        fontSize: Font.fontMedium,
        color: Font.white
    },
    parentViewText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30
    },
    txtHave: {
        fontFamily: Font.fontMontserrat,
        color: Font.white,
        fontSize: Font.fontMedium
    },
    txtSignIn: {
        color: Font.white,
        fontFamily: Font.fontMontserratBig,
        fontSize: Font.fontMedium
    }
})
export default SignIn