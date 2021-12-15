import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import HeaderHome from "../screenblocks/HeaderHome";

export default function HomeScreen({navigation}){

    const [homescreen, setHomescreen] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
            const homescreen = await response.json();
            //console.log(homescreen);
            setHomescreen(homescreen);
        }
        getData();
    }, []);

    function renderItem({item}) {
        return <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate('EmailDetailTeste' , { id: item.id })}>
            <Image style={styles.image} source ={{uri: item.picture}}></Image>
            <View style={styles.textbox}>
                <Text style={styles.nome}>Para {item.to}</Text>

                <Text style={styles.nomeTitulo}>{item.tittle}</Text>
                
            </View>
            <View style={styles.startime}>
                <Text style={styles.times}>{item.time}</Text>
                <Entypo style={styles.stars} name={item.star ? "star" : "star-outlined"} color="orange" size={20} />
            </View>
        </TouchableOpacity>;
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor={'white'} barStyle="dark-content" hidden={true}/>
            <HeaderHome navigation={navigation}/>
            <FlatList
                data={homescreen}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',    
    },
    chat: {
        height:80,
        flexDirection: 'row', 
        borderWidth: 1,
        borderColor: 'gray',
        margin: 0.2,
        borderRadius: 3
    },
    image: {
        height: 50,
        width: 50,
        margin: 10,
        borderRadius: 25,
    },
    textbox: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    startime:{
        padding: 10,
        marginLeft: 'auto',
    },
    times:{
        marginBottom: 10,
    },
    stars:{
        marginLeft : 'auto',
    },
    nome:{
        fontWeight: '100',
        fontSize: 15,
    },
    nomeTitulo:{
        fontWeight: 'bold',
        fontSize: 17,
    },
});
