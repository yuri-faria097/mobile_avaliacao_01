import React from 'react';
import { StyleSheet, View, StatusBar, Image } from 'react-native';

export default function HeaderHome(){
    
    return(
        <View style={styles.header}>
            <StatusBar style="auto" hidden={true}/>
            <Image style={styles.email} source={require('../assets/logo.png')}/>
        </View>    
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderRadius: 5,
        backgroundColor: '#908070',
        justifyContent: 'center',
    },
    emailLogo:{
        justifyContent: 'flex-start',
        paddingLeft: 115,
    },
    email:{
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
});