import React, { useState, createRef } from 'react';

import { Icon } from 'react-native-elements'
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,

} from 'react-native';

import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";


const validationSchema = Yup.object().shape({

    userName: Yup.string().required("userName required"),
    password: Yup.string().required("password required").min(4, "Password must contain at least 4 characters")
});

const LoginScreen = ({ navigation }) => {

    const [loading, setLoading] = useState(false);


    const handleLogin = async (values) => {

        setLoading(true);
       
    }

    return (
        <ImageBackground

            source={require('../assets/images/bgLogin.jpg')}
            resizeMode="cover"
            style={styles.background}
        >
            <View style={styles.mainBody}>
                <FlashMessage position="top" floating />

                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        flex: 1,
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{
                            userName: "",
                            password: "",
                        }}
                        onSubmit={values => {
                            handleLogin(values)
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                            <View>
                                <KeyboardAvoidingView enabled>
                                    <View style={{ alignItems: 'center' }}>

                                        <Text
                                            style={styles.nameTextStyle}
                                        >
                                            Welcome
                                        </Text>
                                        <Text
                                            style={styles.nameTextStyle2}
                                        >
                                            Sign in to your account
                                        </Text>
                                    </View>
                                    <View style={styles.SectionStyle}>
                                        <Icon

                                            name='user'
                                            type='evilicon'
                                            color='#000'
                                            style={styles.imageStyle}
                                        />
                                        <TextInput
                                            style={styles.inputStyle}

                                            onChangeText={handleChange('userName')}
                                            onBlur={handleBlur('userName')}
                                            value={values.userName}
                                            placeholder="Enter userName"
                                            placeholderTextColor="#8b9cb5"
                                            autoCapitalize="none"
                                            returnKeyType="next"
                                            keyboardType="default"
                                            underlineColorAndroid="#f000"



                                        />


                                    </View>
                                    {errors.userName &&
                                        <Text style={styles.errorTextStyle}>{errors.userName}</Text>
                                    }
                                    <View style={styles.SectionStyle}>
                                        <Icon

                                            name='lock'
                                            type='evilicon'
                                            color='#000'
                                            style={styles.imageStyle}
                                        />
                                        <TextInput
                                            style={styles.inputStyle}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            placeholder="Enter Password"
                                            placeholderTextColor="#8b9cb5"
                                            keyboardType="default"
                                            onSubmitEditing={Keyboard.dismiss}
                                            secureTextEntry={true}
                                            underlineColorAndroid="#f000"
                                            returnKeyType="next"
                                        />
                                    </View>
                                    {errors.password &&
                                        <Text style={styles.errorTextStyle}>{errors.password}</Text>
                                    }


                                    <TouchableOpacity
                                        style={styles.buttonStyle}
                                        activeOpacity={0.5}
                                        onPress={handleSubmit}>
                                        <Text style={styles.buttonTextStyle}>
                                            Sign In
                                    </Text>
                                    </TouchableOpacity>

                                    <View style={styles.DivRegisterStyle}>
                                        <Text
                                            style={styles.registerTextStyle1}
                                        >
                                            Don't have an account ?
                            </Text>
                                        <Text
                                            style={styles.registerTextStyle2}
                                            onPress={() => navigation.navigate('RegisterScreen')}>
                                            Register
                            </Text>
                                    </View>
                                </KeyboardAvoidingView>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </View>
        </ImageBackground>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 50,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,

        borderRadius: 30,
        backgroundColor: '#fff',
        shadowColor: '#fff',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.4,
        elevation: 5,


    },
    buttonStyle: {
        backgroundColor: '#0379d4',
        borderColor: '#0379d4',
        color: '#FFFFFF',
        height: 50,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 110,
        marginRight: 110,

        marginTop: 50,

        shadowColor: '#0379d4',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.4,
        elevation: 5,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 12,
        fontWeight: "bold",
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: '#000',

    },
    DivRegisterStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 60,
    },

    registerTextStyle1: {
        color: '#000',
        fontSize: 15,
    },
    registerTextStyle2: {
        color: '#3d7c1e',
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 5
    },
    nameTextStyle: {
        color: '#000',
        fontWeight: "bold",
        paddingTop: 80,
        fontSize: 40,

    },
    nameTextStyle2: {
        paddingBottom: 50,
        color: '#000',
        fontSize: 18,

    },
    errorTextStyle: {
        fontSize: 13,
        color: 'red',
        paddingLeft: 50
    },
    imageStyle: {
        padding: 10,
    },
    background: {
        flex: 1,
        width: '100%',
    },



});