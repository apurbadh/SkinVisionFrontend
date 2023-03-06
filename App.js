import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListCustomItemShowcase } from './pages/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components'; 
import CameraIcon from './pages/components/Camera';
import Details from './pages/Details';
import * as ImagePicker from 'expo-image-picker';
import { createStackNavigator } from '@react-navigation/stack';
import DiseaseDetails from './pages/DiseaseDetails';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


function HomeScreen({navigation}) {


 useEffect(() => {
    console.log()
//     if (image != null ){
// fetch('http://192.168.1.75:8000/diseases/1').then(res => res.json()).then(data => {
//   console.log(data);
//       navigation.navigate('Detail', {disease: data})
//     }).catch(err => console.log(err))
//     }
  }, [props])
  return (
    <View >
      <ListCustomItemShowcase navigation={props.navigation}></ListCustomItemShowcase>
    </View>
  );
}

function HomeContainer() {
  return (

    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} initialParams={route}/>
      <Stack.Screen name='Detail' component={DiseaseDetails}/>
    </Stack.Navigator>
  )
}



export default function App() { 

  const [image, setImage] = useState(null);

  // useEffect(() => {
  //     if (image != null){
  //   // const formData = new FormData();
  //   // formData.append('image', {
  //   //   uri: image,
  //   //   name: 'image.jpg',
  //   //   type: 'image/jpeg',
  //   // });

  //   // fetch('http://192.168.1.75:8000/classify', {
  //   //   method: 'POST',
  //   //   body: formData,
  //   //   headers: {
  //   //     'Content-Type': 'multipart/form-data',
  //   //   },
  //   // })
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     Navigator.navigate('Detail', { disease: data });
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error(error);
  //   //   });

    
  // }
  // }, [image, Navigator])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
  });

  if (!result.canceled) {
    setImage(result.assets[0].uri);
    
  }
};

  return ( 
    <ApplicationProvider {...eva} theme={eva.light}>  
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Disease') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Founders') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#337cbd',
          tabBarInactiveTintColor: 'gray',
        })}
      > 
        <Tab.Screen name="Disease" component={HomeContainer} options={{ headerShown: false }}/>
        <Tab.Screen name="Founders" component={Details} />
      </Tab.Navigator><CameraIcon onPress={pickImage}  />

    </NavigationContainer>
    </ApplicationProvider>
  );
}

