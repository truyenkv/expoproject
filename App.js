// import React from 'react';
// import { Image, Text, View, Button, TextInput} from 'react-native';
// import { NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import Constants from 'expo-constants';



// // function HomeScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
// //       <Button
// //         onPress={() => navigation.navigate('MyModal')}
// //         title="Open Modal"
// //       />
// //     </View>
// //   );
// // }

// // function ModalScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text style={{ fontSize: 30 }}>This is a modal!</Text>
// //       <Button onPress={() => navigation.goBack()} title="Dismiss" />
// //     </View>
// //   );
// // }

// // function DetailsScreen() {
// //   return (
// //     <View>
// //       <Text>Details</Text>
// //     </View>
// //   );
// // }

// // const MainStack = createStackNavigator();
// // const RootStack = createStackNavigator();

// // function MainStackScreen() {
// //   return (
// //     <MainStack.Navigator>
// //       <MainStack.Screen name="Home" component={HomeScreen} />
// //       <MainStack.Screen name="Details" component={DetailsScreen} />
// //     </MainStack.Navigator>
// //   );
// // }

// // function App() {
// //   return (
// //     <NavigationContainer>
// //       <RootStack.Navigator mode="modal" headerMode="none">
// //         <RootStack.Screen name="Main" component={MainStackScreen} />
// //         <RootStack.Screen name="MyModal" component={ModalScreen} />
// //       </RootStack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // export default App;


// //const Tab = createBottomTabNavigator();

// function HomeScreen({route, navigation}){
//   const[count, setCount] = React.useState(Math.floor(Math.random()*100));
//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button
//           title = "Update count"
//           onPress = {() => setCount(c=> c+1)}
//           />
//       )});
//     },[navigation, setCount]);


//   React.useEffect(() => {
//     if(route.params?.post){
//       //post some thing
//     }
//   }, [route.params?.post]);
//   return (
    
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>KIEU VAN TRUYEN HOME APP</Text>

//       {/* <Button 
//         title = "Update Title screen "
//         onPress = {() => navigation.setOptions({title: 'Updated'})}/> */}
     
//       {/* <Button
//         title="Nesting"
//         onPress={() => navigation.navigate('NestingNavigator')}/>
//       <Button  */}
//         {/* title="Detail screen" 
//         onPress={() => navigation.navigate(
//           'Detail', {itemId: 86, otherParam: 'anything you want here',})}/>
//       <Button 
//         title="Param screen" 
//         onPress={() => navigation.navigate('Param')}
//         />

//       <Button
//         title = "Create Post"
//         // name ở đây phải tương ứng với name khai bao o stack
//         onPress = {() => navigation.navigate('CreatePost', { name: 'Create Post Screen'})}/>
//       <Text style={{ margin: 10 }}>She said: {route.params?.post}</Text>
//       <Text>Count: {count}</Text> */}
//     </View>
    
//   );
// }

// function ModalScreen({navigation}){
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30 }}>This is a modal!</Text>
//       <Button onPress={() => navigation.goBack()} title="Dismiss" />
//     </View>
//   );
// }
// const MainStack = createStackNavigator();
// const RootStack = createStackNavigator();

// function MainStackScreen(){
//   return (
//     <MainStack.Navigator> 
//        <MainStack.Screen name="Home" component={HomeScreen} />
//        <MainStack.Screen name="Detail" component={DetailScreen}/>
//     </MainStack.Navigator> 
//   )
// }

// function RootStackScreen() {
//   return (
//     <RootStack.Navigator mode="modal">
//       <RootStack.Screen
//         name="Main"
//         component={MainStackScreen}
//         options={{ headerShown: false }}
//       />
//       <RootStack.Screen name="MyModal" component={ModalScreen} />
//     </RootStack.Navigator>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }


// function ParamScreen({route, navigation}){
//   const { itemId } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Check params screen</Text>
//       <Text>itemId: { JSON.stringify(itemId) }</Text>
//     </View>
//   );
// }

// function DetailScreen({route, navigation}){
//   // Get the param
//   const { itemId } = route.params;
//   const { otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>This is detail screen</Text>
//       <Text>itemId: { JSON.stringify(itemId) }</Text>
//       <Text>otherParam: { JSON.stringify(otherParam) }</Text>

//       {/* Navigate to call this page at stay this page */}
//       <Button
//         title = "Reload page"
//         onPress = {()=> navigation.navigate('Detail')}/>

//         {/* Push to add more page same parent page, random param chi danh cho push */}
//       <Button
//         title = "Add more Detail screen" 
//         onPress = {() => navigation.push('Detail',{
//           itemId: Math.floor(Math.random()*100),
//         })}/>
      
//       {/* Go back to previous screen*/}
//       <Button 
//         title = "Go Previous Page"
//         onPress = {() => navigation.goBack()}
//       />

//         {/* Go home immediately */}
//       <Button 
//         title = "Go back to Home"
//         onPress = {() => navigation.navigate('Home')}/>

//       {/* Go back the root page */}
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       /> 


//     </View>
//   )
// }

// function CreatePostScreen({navigation, route}){
//   const [postText, setPostText] = React.useState('');
//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: 'white' }}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           // Pass params back to home screen
//           navigation.navigate('Home', { post: postText });
//         }}
//       />
//     </>
//   );
// }

// function LogoTitle(){
//   return (
//     <Image
//       style={{ width: 50, height: 50}}
//       source= {require('./assets/truyen.jpg')}
//     />
//   ); 
// }



// // function NestingNavigator(){
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator>
// //         <Tab.Screen name="First">
// //           {() => (
// //             <SettingsStack.Navigator>
// //               <SettingsStack.Screen
// //                 name="Settings"
// //                 component={SettingsScreen}
// //               />
// //               <SettingsStack.Screen name="Profile" component={ProfileScreen} />
// //             </SettingsStack.Navigator>
// //           )}
// //         </Tab.Screen>
// //         <Tab.Screen name="Second">
// //           {() => (
// //             <HomeStack.Navigator>
// //               <HomeStack.Screen name="Home" component={HomeScreen} />
// //               <HomeStack.Screen name="Details" component={DetailsScreen} />
// //             </HomeStack.Navigator>
// //           )}
// //         </Tab.Screen>
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();


// function App(){
//   return(
//     <NavigationContainer>
//       {/* <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen}
//               options={({navigation, route}) => ({
//                 headerTitle: props => <LogoTitle {...props} />, 
//                 headerStyle: { backgroundColor: '#f4511e',headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',},},
//                 headerLeft: () => (
//                           <Button
//                             onPress = {() => alert('This is a button')}
//                             title = 'Infor'
//                             color="#fafa"/>
//                         ),
//               })}
//                 />
//         <Stack.Screen name="NestingNavigator" component={NestingNavigator}/>
//         <Stack.Screen name="Detail" component={DetailScreen} />
//         <Stack.Screen name="Param" component={ParamScreen} initialParams = {{ itemId: Math.floor(Math.random()*100) }}/>
//         <Stack.Screen name="CreatePost" component={CreatePostScreen} options = {({route}) => ({ title: route.params.name})} />
//       </Stack.Navigator> */}
//       <Drawer.Navigator initialRouteName="Home">
//           <Drawer.Screen name="Home" component={HomeScreen} 
//               options={({navigation, route}) => ({
//                 headerTitle: props => <LogoTitle {...props} />, 
//                 headerStyle: { backgroundColor: '#f4511e',headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',},},
//                 headerLeft: () => (
//                           <Button
//                             onPress = {() => alert('This is a button')}
//                             title = 'Infor'
//                             color="#fafa"/>
//                         ),
//               })}/>
//           <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }



// export default  App;

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
