
import React, { useState } from 'react';
import { Icon } from 'react-native-elements'
import { Formik } from 'formik';
import * as Yup from 'yup';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Button,
} from 'react-native';

import FlashMessage, { showMessage } from "react-native-flash-message";
  

const RegisterScreen = (props) => {
 
    const [loading, setLoading] = useState(false);

    const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
    const [passwordHidden, setPasswordHidden] = useState(true)
    const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true)

    const buttonTextStyle = {
        color: '#3d7c1e'
    };

    const validationSchema = Yup.object().shape({
        cin: Yup.string().required('cin is required').max(20),
        firstName: Yup.string().required('First Name is required').max(20),
        lastName: Yup.string().required('Last Name is required').max(20),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: Yup.string().required('phone Number is required'),
        token: Yup.string().required('token is required').max(8),
        userName: Yup.string().required('userName is required').max(20),
        password: Yup.string().required("password is required").min(4, "Password must contain at least 4 characters"),
        confirmPassword: Yup.string().required("Confirm your password").oneOf([Yup.ref('password'), null], "Password not conform")


    });

    const handleRegister = async (values) => {

        setLoading(true);
    }


    if (isRegistraionSuccess) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#0379d4',
                    justifyContent: 'center',
                }}>
                <Image
                    source={require('../assets/images/success.png')}
                    style={{
                        height: 150,
                        resizeMode: 'contain',
                        alignSelf: 'center'
                    }}
                />
                <Text style={styles.successTextStyle}>
                    Registration Successful
        </Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('LoginScreen')}>
                    <Text style={styles.buttonTextStyle}>Login Now</Text>
                </TouchableOpacity>

            </View>
        );
    }
    return (


        <ImageBackground

            source={require('../assets/images/bgRegister2.jpg')}
            resizeMode="cover"
            style={styles.background}
        >
            <View>
                <FlashMessage position="top" floating />
 
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}>

                    <View style={{ alignItems: 'center' }}>

                        <Text
                            style={styles.nameTextStyle}
                        >
                            Create account
                            </Text>

                    </View>


                    <KeyboardAvoidingView enabled>
                        <Formik
                            validationSchema={validationSchema}
                            initialValues={{
                                cin: "",
                                firstName: "",
                                lastName: "",
                                email: "",
                                phoneNumber: "",
                                token: "",
                                userName: "",
                                password: "",
                                confirmPassword: "",


                            }}
                            onSubmit={values => {

                                handleRegister(values)
                            }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (

                                <View style={{ flex: 1 }}>

                                    <ProgressSteps
                                        activeStepIconBorderColor="#3d7c1e"
                                        completedProgressBarColor="#3d7c1e"
                                        completedStepIconColor="#3d7c1e"
                                        activeLabelColor="#000"
                                        completedLabelColor="#3d7c1e"

                                    >

                                        <ProgressStep
                                            label="User Info"

                                        >
                                            <View >
                                                <View style={styles.SectionStyle}>
                                                    <Icon

                                                        name='user-o'
                                                        type='font-awesome'
                                                        color='#000'
                                                        size={16}
                                                        style={styles.imageStyle}
                                                    />
                                                    <TextInput
                                                        style={styles.inputStyle}
                                                        onChangeText={handleChange('cin')}
                                                        onBlur={handleBlur('cin')}
                                                        value={values.cin}
                                                        underlineColorAndroid="#f000"
                                                        placeholder="Enter Cin"
                                                        placeholderTextColor="#8b9cb5"
                                                        autoCapitalize="sentences"
                                                        returnKeyType="next"


                                                    />
                                                </View>
                                                {errors.cin &&
                                                    <Text style={styles.errorTextStyle}>{errors.cin}</Text>
                                                }
                                                <View style={styles.SectionStyle}>
                                                    <Icon

                                                        name='user-o'
                                                        type='font-awesome'
                                                        color='#000'
                                                        size={16}
                                                        style={styles.imageStyle}
                                                    />
                                                    <TextInput
                                                        style={styles.inputStyle}
                                                        onChangeText={handleChange('firstName')}
                                                        onBlur={handleBlur('firstName')}
                                                        value={values.firstName}
                                                        underlineColorAndroid="#f000"
                                                        placeholder="Enter FirstName"
                                                        placeholderTextColor="#8b9cb5"
                                                        autoCapitalize="sentences"
                                                        returnKeyType="next"


                                                    />
                                                </View>
                                                {errors.firstName &&
                                                    <Text style={styles.errorTextStyle}>{errors.firstName}</Text>
                                                }
                                                <View style={styles.SectionStyle}>
                                                    <Icon

                                                        name='user-o'
                                                        type='font-awesome'
                                                        color='#000'
                                                        size={16}
                                                        style={styles.imageStyle}
                                                    />
                                                    <TextInput
                                                        style={styles.inputStyle}
                                                        onChangeText={handleChange('lastName')}
                                                        onBlur={handleBlur('lastName')}
                                                        value={values.lastName}
                                                        underlineColorAndroid="#f000"
                                                        placeholder="Enter LastName"
                                                        placeholderTextColor="#8b9cb5"
                                                        autoCapitalize="sentences"
                                                        returnKeyType="next"


                                                    />
                                                </View>
                                                {errors.lastName &&
                                                    <Text style={styles.errorTextStyle}>{errors.lastName}</Text>
                                                }
                                                <View style={styles.SectionStyle}>
                                                    <Icon

                                                        name='envelope-o'
                                                        type='font-awesome'
                                                        color='#000'
                                                        size={16}
                                                        style={styles.imageStyle}
                                                    />
                                                    <TextInput
                                                        style={styles.inputStyle}
                                                        onChangeText={handleChange('email')}
                                                        onBlur={handleBlur('email')}
                                                        value={values.email}
                                                        underlineColorAndroid="#f000"
                                                        placeholder="Enter Email"
                                                        placeholderTextColor="#8b9cb5"
                                                        keyboardType="email-address"
                                                        returnKeyType="next"

                                                    />
                                                </View>
                                                {errors.email &&
                                                    <Text style={styles.errorTextStyle}>{errors.email}</Text>
                                                }
                                                <View style={styles.SectionStyle}>
                                                    <Icon

                                                        name='phone'
                                                        type='font-awesome'
                                                        color='#000'
                                                        size={16}
                                                        style={styles.imageStyle}
                                                    />
                                                    <TextInput
                                                        style={styles.inputStyle}
                                                        onChangeText={handleChange('phoneNumber')}
                                                        onBlur={handleBlur('phoneNumber')}
                                                        value={values.phoneNumber}
                                                        underlineColorAndroid="#f000"
                                                        placeholder="Enter PhoneNumber"
                                                        placeholderTextColor="#8b9cb5"
                                                        keyboardType="numeric"
                                                        returnKeyType="next"

                                                    />
                                                </View>
                                                {errors.phoneNumber &&
                                                    <Text style={styles.errorTextStyle}>{errors.phoneNumber}</Text>
                                                }
                                            </View>
                                        </ProgressStep>
                                        <ProgressStep label="Account Info"
                                            nextBtnTextStyle={buttonTextStyle}
                                            onSubmit={handleSubmit}
                                        >
                                            <View>
                                                <View style={styles.SectionStyle}>
                                                    <Icon

                                                        name='qrcode'
                                                        type='font-awesome'
                                                        color='#000'
                                                        size={16}
                                                        style={styles.imageStyle}
                                                    />
                                                    <TextInput
                                                        style={styles.inputStyle}
                                                        onChangeText={handleChange('token')}
                                                        onBlur={handleBlur('token')}
                                                        value={values.token}
                                                        underlineColorAndroid="#f000"
                                                        placeholder="Enter Token"
                                                        placeholderTextColor="#8b9cb5"
                                                        autoCapitalize="sentences"
                                                        returnKeyType="next"

                                                    />
                                                </View>
                                                {errors.token &&
                                                    <Text style={styles.errorTextStyle}>{errors.token}</Text>
                                                }
                                                <View style={styles.SectionStyle}>
                                                    <Icon

                                                        name='user-circle-o'
                                                        type='font-awesome'
                                                        color='#000'
                                                        size={16}
                                                        style={styles.imageStyle}

                                                    />
                                                    <TextInput
                                                        style={styles.inputStyle}
                                                        onChangeText={handleChange('userName')}
                                                        onBlur={handleBlur('userName')}
                                                        value={values.userName}
                                                        underlineColorAndroid="#f000"
                                                        placeholder="Enter UserName"
                                                        placeholderTextColor="#8b9cb5"
                                                        autoCapitalize="sentences"
                                                        returnKeyType="next"

                                                    />
                                                </View>
                                                {errors.userName &&
                                                    <Text style={styles.errorTextStyle}>{errors.userName}</Text>
                                                }

                                                <View style={styles.SectionStyle}>
                                                    <Icon
                                                        name='lock'
                                                        type='font-awesome-5'
                                                        color='#000'
                                                        size={13}
                                                        style={styles.imageStyle}
                                                    />
                                                    <TextInput
                                                        style={styles.inputStyle}
                                                        onChangeText={handleChange('password')}
                                                        onBlur={handleBlur('password')}
                                                        value={values.password}
                                                        underlineColorAndroid="#f000"
                                                        placeholder="Enter Password"
                                                        placeholderTextColor="#8b9cb5"
                                                        returnKeyType="next"
                                                        secureTextEntry={passwordHidden}


                                                    />
                                                    <Icon
                                                        type="font-awesome-5"
                                                        size={17}
                                                        style={styles.iconEye}
                                                        name={!passwordHidden ? 'eye' : 'eye-slash'}
                                                        onPress={() => setPasswordHidden(!passwordHidden)}
                                                    />

                                                </View>
                                                {errors.password &&
                                                    <Text style={styles.errorTextStyle}>{errors.password}</Text>
                                                }
                                                <View style={styles.SectionStyle}>
                                                    <Icon

                                                        name='lock'
                                                        type='font-awesome'
                                                        color='#000'
                                                        size={16}
                                                        style={styles.imageStyle}
                                                    />
                                                    <TextInput
                                                        style={styles.inputStyle}
                                                        onChangeText={handleChange('confirmPassword')}
                                                        onBlur={handleBlur('confirmPassword')}
                                                        value={values.confirmPassword}
                                                        underlineColorAndroid="#f000"
                                                        placeholder="Confirm Password"
                                                        placeholderTextColor="#8b9cb5"

                                                        returnKeyType="next"
                                                        secureTextEntry={confirmPasswordHidden}

                                                    />
                                                    <Icon
                                                        type="font-awesome-5"
                                                        size={17}
                                                        style={styles.iconEye}
                                                        name={!confirmPasswordHidden ? 'eye' : 'eye-slash'}
                                                        onPress={() => setConfirmPasswordHidden(!confirmPasswordHidden)}
                                                    />
                                                </View>
                                                {errors.confirmPassword &&
                                                    <Text style={styles.errorTextStyle}>{errors.confirmPassword}</Text>
                                                }
                                            </View>


                                        </ProgressStep>


                                    </ProgressSteps>
                                </View>

                            )}
                        </Formik>

                        <View style={styles.DivRegisterStyle}>
                            <Text
                                style={styles.registerTextStyle1}
                            >
                                Already have an account ?
                            </Text>
                            <Text
                                style={styles.registerTextStyle2}
                                onPress={() => props.navigation.navigate('LoginScreen')}>
                                Login
                            </Text>
                        </View>

                    </KeyboardAvoidingView>
                </ScrollView>

            </View>
        </ImageBackground>

    );
};
export default RegisterScreen;

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
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
        backgroundColor: '#3d7c1e',
        borderColor: '#3d7c1e',
        color: '#FFFFFF',
        height: 50,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 110,
        marginRight: 110,

        marginTop: 20,
        marginBottom: 20,

        shadowColor: '#3d7c1e',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.4,
        elevation: 5,

    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: '#000',
    },
    errorTextStyle: {
        fontSize: 13,
        color: 'red',
        paddingLeft: 50
    },
    successTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
    },
    background: {
        flex: 1,
        width: '100%',
    },
    nameTextStyle: {
        paddingTop: 60,
        color: '#000',
        fontSize: 22,
        fontWeight: "bold"

    },
    imageStyle: {
        padding: 10,
    },
    iconEye: {
        padding: -10,
    },
    DivRegisterStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
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
});