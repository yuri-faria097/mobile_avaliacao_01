import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, StatusBar, View, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'; //usado no header
import { Entypo } from '@expo/vector-icons';
import WebView from 'react-native-webview';

export default function EmailDetailTeste({ route, navigation }){
    
    const { id } = route.params;

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/' + id);
            const data = await response.json();
            setData(data);
        }
        getData();
    }, []);
   
    return( 
        <View style={styles.container}>
            
            <View style={styles.header}>
                <StatusBar style="auto" hidden={true}/>
                <FontAwesome5 name="angle-left" size={24} color="black" onPress={() => navigation.navigate('HomeScreen')}/>
            </View>   

            
            <View style={styles.tittle}>
                <Text style={styles.large}>{data.tittle}</Text>
            </View>

            
            <View style={styles.info}>
                <Image style={styles.image} source ={{uri: data.picture}}></Image>
                <View style={styles.textbox}>
                    <Text>de </Text> 
                    <Text style={styles.names}>{data.from} </Text>
                    <Text>para </Text>
                    <Text style={styles.names}>{data.to}</Text>
                        <View style={styles.startime}>
                           <Text> {data.time} </Text> 
                           <Entypo name={data.star ? "star" : "star-outlined"} color="orange" size={20} />    
                        </View>
                 </View>
            </View>
        
            <WebView source={{html: `<div style= "font-size: 275%"> ${data.body} </div>` }} />
        
        </View> 
    )
}


const styles = StyleSheet.create({

    container:{
        flex: 1,
    },
    header:{
        flexDirection: 'row',
        padding: 10,
        height: 55,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        margin: 0.4,
        borderRadius: 3,
        backgroundColor: '#908070',
    },
    tittle:{
        flexDirection: 'row',
        padding: 10,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        margin: 0.3,
        borderRadius: 3,  
    },
    info: {
        height:80,
        flexDirection: 'row', 
        borderWidth: 1,
        borderColor: 'gray',
        margin: 0.2,
        borderRadius: 3,
      },
    image: {
        height: 50,
        width: 50,
        margin: 10,
        borderRadius: 25,
        alignSelf: 'center',
    },
    textbox: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    startime:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginLeft: 'auto',
    },
    large:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    names:{
        fontWeight: 'bold',  
    },
});

