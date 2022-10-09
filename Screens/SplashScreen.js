// Import React and Component
import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Image,
    ImageBackground
} from 'react-native'; 

const SplashScreen = ({ navigation }) => {
    //State for ActivityIndicator animation
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        
    }, []);

    return (
        <ImageBackground

            source={require('../assets/images/bgRegister.jpg')}
            resizeMode="cover"
            style={styles.background}
        >
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/aboutreact.png')}
                    style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
                />
                <ActivityIndicator
                    animating={animating}
                    color="#3d7c1e"
                    size="large"
                    style={styles.activityIndicator}
                />
            </View>
        </ImageBackground>

    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
    background: {
        flex: 1,
        width: '100%',
    },
});