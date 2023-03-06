import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';


export default function Details() {
    const [diseases, setDiseases] = useState([]);

    useEffect(() => {
       
        fetch('http://192.168.1.75:8000/users')
        .then(response => response.json())
        .then(data => {

            setDiseases(data)
        });
  }, []);

  const renderItem = ({ item }) => (
    <View>
        <Card
            style={styles.item}
            status='basic'
            
        >


<Image source={{ uri: `http://192.168.1.75:8000/images/${item.image_url}` }} style={styles.image} />
            <Text>

            </Text>
            <Text category='h6' style={styles.m2}>
                {item.name}
            </Text>
            <Text style={styles.italic}>
                {item.email}
            </Text>
            <Text style={styles.m4}>
                {item.quote}
            </Text>
        </Card>
    </View>
  );

  return (
    <List
    style={styles.container}
    data={diseases}
    renderItem={renderItem}
    contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  
    contentContainer: {
      paddingHorizontal: 8,
      paddingVertical: 4,
    },


    italic: {
        fontStyle: 'italic'
    },
  

    image: {
        width: '50%',
        height: 250,
        borderRadius: 200
  },

  m4: {
    marginVertical: 10
  }
  });