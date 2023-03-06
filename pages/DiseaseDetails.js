import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, Text } from '@ui-kitten/components';

export default function DiseaseDetails ({ route }) {
    
    const { disease } = route.params;
    
    return (<View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={{uri: `http://192.168.1.75:8000/images/${disease.image_url}`}} style={styles.image}/>
        <Text style={styles.title}> {disease.name} </Text>
        <Text style={styles.bold}> Symptoms <Text>:  {disease.symptom}</Text></Text>
        <Text style={styles.bold}> Remedy <Text>:  {disease.remedy}</Text></Text>

        </View>)

}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        borderRadius: 200,
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 20
    },

    bold: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    }
})
