import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';



export const ListCustomItemShowcase = ({ navigation }) => {

  const [diseases, setDiseases] = useState([]);


  useEffect(function () {
    fetch('http://192.168.1.75:8000/diseases')
    .then(response => response.json())
    .then(data => {

        setDiseases(data)
    });
  }, [])

  

  const renderItemHeader = (headerProps, item) => (
    <View {...headerProps}>
      <Text category='h6'>
        {item.name} 
      </Text>
    </View>
  );

  const renderItemFooter = (footerProps, item) => (
    <Text {...footerProps}>
     <Text style={styles.bold}>Remedy</Text> :  { item.remedy }
    </Text>
  );

  const renderItem = ({ item }) => (
    <Card
      style={styles.item}
      status='basic'
      header={headerProps => renderItemHeader(headerProps, item)}
      footer={footerProps => renderItemFooter(footerProps, item)}
      onPress={() => navigation.navigate('Detail', {disease: item})}
      >
        <View style={styles.flexbox}
        >
          <Image source={{ uri: `http://192.168.1.75:8000/images/${item.image_url}` }} style={styles.image} />

          <Text style={styles.wrap}>
            { item.symptom }
          </Text>
          </View>
    </Card>
  );

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={diseases}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,

  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 200,
    marginRight: 50
  },
  bold: {
    fontWeight: 'bold'
  },
  flexbox: {
    display: 'flex',
    flexDirection: 'row'
  },
  wrap: {
    flexWrap: "wrap",
    display: "flex",
    alignItems: "flex-start",
    flexShrink:1
  }
});