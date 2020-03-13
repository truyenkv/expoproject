import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Constants from 'expo-constants';




function HomeScreen({route, navigation}){
  React.useEffect(() => {
    if(route.params?.post){
      //post some thing
    }
  }, [route.params?.post]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>KIEU VAN TRUYEN HOME APP</Text>
      <Button 
        title="Detail screen" 
        onPress={() => navigation.navigate(
          'Detail', {itemId: 86, otherParam: 'anything you want here',})}/>
      <Button 
        title="Param screen" 
        onPress={() => navigation.navigate('Param')}
        />

      <Button
        title = "Create Post"
        onPress = {() => navigation.navigate('CreatePost')}/>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
    
  );
}


function ParamScreen({route, navigation}){
  const { itemId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Check params screen</Text>
      <Text>itemId: { JSON.stringify(itemId) }</Text>
    </View>
  );
}

function DetailScreen({route, navigation}){
  // Get the param
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is detail screen</Text>
      <Text>itemId: { JSON.stringify(itemId) }</Text>
      <Text>otherParam: { JSON.stringify(otherParam) }</Text>



      {/* Navigate to call this page at stay this page */}
      <Button
        title = "Reload page"
        onPress = {()=> navigation.navigate('Detail')}/>

        {/* Push to add more page same parent page, random param chi danh cho push */}
      <Button
        title = "Add more Detail screen" 
        onPress = {() => navigation.push('Detail',{
          itemId: Math.floor(Math.random()*100),
        })}/>
      
      {/* Go back to previous screen*/}
      <Button 
        title = "Go Previous Page"
        onPress = {() => navigation.goBack()}
      />

        {/* Go home immediately */}
      <Button 
        title = "Go back to Home"
        onPress = {() => navigation.navigate('Home')}/>

      {/* Go back the root page */}
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> 


    </View>
  )
}

function CreatePostScreen({navigation, route}){
  const [postText, setPostText] = React.useState('');
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
  );
}

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page' }} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Param" component={ParamScreen} initialParams = {{ itemId: Math.floor(Math.random()*100) }}/>
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default  App;

