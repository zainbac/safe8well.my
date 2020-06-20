import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';
// import { Icon } from 'react-native-elements'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import MainSearch from './src/components/molecule/SearchFeature';
// import Gonews from './src/components/molecule/GoNews';
// import Internalgo from './src/components/molecule/Internalgo';
// import Scrollable from './src/components/organism/Scrollable';
// import Navbarr from './src/components/organism/NavbarH';
// import MainFeatureH from './src/components/organism/MainFeatureH';
// import HomeNaveFeature from './src/components/organism/HomeNaveFeature';
//import Home from './src/container/pages/Home';
import AppNavigator from './src/config/router';



class App extends Component {
  render() {
    return (

      //<Home />
      <AppNavigator />

      // <View style={{ flex: 1 }}>
      //   <ScrollView style={{ flex: 1, backgroundColor: 'pinq', paddingTop: 40 }}>
      //     <View>


      //       {/* <View style={{ marginHorizontal: 17, flexDirection: 'row' }}>
      //       <View style={{ width: 26, backgroundColor: 'white', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
      //         <Image source={require('./assets/cipan.png')} />
      //       </View>
      //       <TextInput value="hi ainaaa asallll x tidurR agi" style={{ borderWidth: 1, borderColor: '#2C5FB8', borderRadius: 25, height: 40, fontSize: 14, paddingLeft: 100, paddingRight: 55 }} ></TextInput>
      //       <Image source={require('./assets/search.png')} style={{ position: 'absolute', top: 5, left: 320, width: 35, height: 35 }} />
      //     </View> */}

      //       <MainSearch img={require('./assets/cipan.png')} />


      //       <View style={{ marginHorizontal: 17, marginTop: 8 }}>
      //         <View style={{
      //           flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 8, borderTopRightRadius: 4, padding: 14
      //         }}>
      //           < Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>S-SPORT</Text>
      //           <Image source={require('./assets/safe.png')} style={{
      //             right: 18, height: 40, width: 40
      //           }} />
      //         </View>

      //         {/* <View style={{ flex: 1, alignItems: 'center' }}>
      //           <Image source={require('./assets/icon4.png')} />
      //           <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15 }}>SCAN HERE</Text>
      //         </View> */}

      //         {/* <View style={{ flex: 1, alignItems: 'center' }}>
      //           <Image source={require('./assets/icon4.png')} />
      //           <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15 }}> PAY HERE</Text>
      //         </View> */}

      //         {/* <View style={{ flex: 1, alignItems: 'center' }}>
      //           <Image source={require('./assets/atas1.png')} />
      //           <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15 }} > GALLERY</Text>
      //         </View>

      //         <View style={{ flex: 1, alignItems: 'center' }}>
      //           <Image source={require('./assets/atas2.png')} />
      //           <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15 }}> INFO</Text>
      //         </View> */}
      //         {/* <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLefttRadius: 4, borderBottomRightRadius: 4 }}>
      //         <NavFeature title="Pay" img={require('./assets/atas1.png')} />
      //         <NavFeature title="BAYAE" img={require('./assets/atas1.png')} />
      //         <NavFeature title="PSSay" img={require('./assets/atas2.png')} />
      //         <NavFeature title="PaySS" img={require('./assets/atas1.png')} />
      //       </View> */}

      //         <HomeNaveFeature />

      //         <MainFeatureH />


      //         <View style={{ flexDirection: 'row', marginTop: 18, marginHorizontal: 0, flexWrap: 'wrap', marginBottom: 18 }}>

      //           {/* <View style={{
      //           justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap'
      //         }} >
      //           <MainFeature title="GOKu1" img={require('./assets/icon4.png')} />
      //           <MainFeature title="GOKu2" img={require('./assets/icon4.png')} />
      //           <MainFeature title="GOKu3" img={require('./assets/icon4.png')} />
      //           <MainFeature title="GOKu4" img={require('./assets/icon4.png')} />
      //           <MainFeature title="GOKu5" img={require('./assets/icon4.png')} />
      //           <MainFeature title="GOKu6" img={require('./assets/icon4.png')} />
      //           <MainFeature title="GOKu7" img={require('./assets/icon4.png')} />
      //           <MainFeature title="GOKu" img={require('./assets/icon4.png')} />
      //         </View> */}
      //           {/* <View style={{ alignItems: 'center' }}>
      //             <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}><Image source={require('./assets/icon3.png')} /></View>
      //             <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: 'bold', marginTop: 6 }}>PAY </Text>
      //           </View>

      //           <View style={{ alignItems: 'center' }}>
      //             <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}><Image source={require('./assets/icon4.png')} /></View>
      //             <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: 'bold', marginTop: 6 }}>PAY </Text>
      //             </View>
      //              <View style={{ alignItems: 'center' }}>
      //             <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}><Image source={require('./assets/icon4.png')} /></View>
      //             <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: 'bold', marginTop: 6 }}>PAY </Text>
      //             </View>
      //             <View style={{ alignItems: 'center' }}>
      //             <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}><Image source={require('./assets/icon4.png')} /></View>
      //             <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: 'bold', marginTop: 6 }}>PAY </Text>
      //             </View>
      //              </View>

      //            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
      //             <View style={{ alignItems: 'center' }}>
      //             <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}><Image source={require('./assets/icon4.png')} /></View>
      //             <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: 'bold', marginTop: 6 }}>PAY </Text>
      //             </View>
      //              <View style={{ alignItems: 'center' }}>
      //             <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}><Image source={require('./assets/icon4.png')} /></View>
      //             <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: 'bold', marginTop: 6 }}>PAY </Text>
      //             </View>
      //             <View style={{ alignItems: 'center' }}>
      //             <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}><Image source={require('./assets/icon4.png')} /></View>
      //             <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: 'bold', marginTop: 6 }}>PAY </Text>
      //             </View>
      //             <View style={{ alignItems: 'center' }}>
      //             <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}><Image source={require('./assets/icon4.png')} /></View>
      //             <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: 'bold', marginTop: 6 }}>PAY </Text>
      //              </View> */}

      //         </View>
      //       </View>
      //       {/* INTETNALGO */}
      //       <View style={{ paddingTop: 16 }}>


      //         <Scrollable />
      //         <Internalgo />
      //         {/* <View style={{ position: 'relative' }} >
      //         <Image source={require('./assets/kickoff.jpg')} style={{
      //           height: 200, width: 380, alignItems: 'center', marginHorizontal: 16, borderRadius: 6
      //         }} />
      //         <Image source={require('./assets/jumbo.png')} style={{
      //           alignItems: 'center', marginHorizontal: 16, borderRadius: 6, position: 'absolute', left: 340, bottom: 160
      //         }} />
      //         <View style={{ paddingTop: 16, paddingBottom: 20, marginHorizontal: 16, borderBottomWidth: 1, borderBottomColor: 'E8E9D', marginBottom: 10 }}>


      //           <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }}>SPORT SHOES</Text>

      //           <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#7A7A7A', marginBottom: 11 }}>Kami meyediakan perkhidmatan menuak kasut dan lain , kami juga</Text>
      //           <Text></Text>
      //           <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-start', borderRadius: 4 }}>
      //             <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
      //               READ
      //               </Text>
      //           </TouchableOpacity>

      //         </View>
      //       </View> */}
      //       </View>
      //     </View>
      //     {/* other section */}
      //     {/* <View style={{ marginBottom: 50, padding: 16, alignItems: 'center' }}>
      //           <View style={{ position: 'relative' }}>
      //             <Image source={require('./assets/kickoff.jpg')} style={{
      //               height: 200, width: 380, alignItems: 'center', borderRadius: 6
      //             }} />
      //             <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', paddingHorizontal: 5, justifyContent: 'space-between' }}>
      //               <View style={{ alignSelf: 'flex-start', right: 0, bottom: 0, left: 10 }}>
      //                 <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, borderRadius: 4, top: 30, left: 0, width: '100%' }}>
      //                   <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
      //                     REDEEM HERE
      //            </Text>
      //                 </TouchableOpacity>
      //               </View>
      //               <View style={{ left: 30 }}>
      //                 <Text style={{ color: 'white', bottom: 15, fontSize: 18, fontWeight: 'bold' }}>CLAIM YOUR VOCUHER</Text>
      //                 <Text style={{ color: 'white', bottom: 15, fontSize: 13, fontWeight: 'bold', }}>CLAIM YOUR VOCUHER HERE</Text>
      //               </View>

      //             </View>
      //           </View>
      //           <View>
      //           </View>
      //         </View> */}
      //     {/* other section */}
      //     <Gonews />
      //     {/* other section */}
      //     {/* <View>
      //     <View >
      //       <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 18 }}>
      //         <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#61A756' }}>OUR CATEGORY</Text>
      //         <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#61A756' }}>SEE ALL</Text>
      //       </View >
      //       <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
      //         <View style={{ marginBottom: 20, marginRight: 16 }} >
      //           <View style={{ width: 150, height: 150, marginBottom: 0, backgroundColor: 'yellow' }}>
      //             <Image source={require('./assets/download.jpg')} style={{ borderRadius: 4, width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
      //           </View >
      //           <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ADIDAS</Text>
      //         </View>

      //         <View style={{ marginBottom: 20, marginRight: 16, marginHorizontal: 18 }} >
      //           <View style={{ width: 150, height: 150, marginBottom: 0, backgroundColor: 'yellow' }}>
      //             <Image source={require('./assets/download.jpg')} style={{ borderRadius: 4, width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
      //           </View >
      //           <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ADIDAS</Text>
      //         </View>

      //         <View style={{ marginBottom: 20, marginRight: 16 }} >
      //           <View style={{ width: 150, height: 150, marginBottom: 0, backgroundColor: 'yellow' }}>
      //             <Image source={require('./assets/download.jpg')} style={{ borderRadius: 4, width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
      //           </View >
      //           <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ADIDAS</Text>
      //         </View>

      //         <View style={{ marginBottom: 20, marginRight: 16 }} >
      //           <View style={{ width: 150, height: 150, marginBottom: 0, backgroundColor: 'yellow' }}>
      //             <Image source={require('./assets/download.jpg')} style={{ borderRadius: 4, width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
      //           </View >
      //           <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ADIDAS</Text>
      //         </View>

      //         <View style={{ marginBottom: 20, marginRight: 16 }} >
      //           <View style={{ width: 150, height: 150, marginBottom: 0, backgroundColor: 'yellow' }}>
      //             <Image source={require('./assets/download.jpg')} style={{ borderRadius: 4, width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
      //           </View >
      //           <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ADIDAS</Text>
      //         </View>
      //       </ScrollView>
      //      </View>
      //       </View> */}
      //   </ScrollView >
      //   <View>
      //     {/* <View style={{ height: 54, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center' }}>

      //        <Navbar title="HOME1" img={require('./assets/icon3.png')} active={true} />
      //        <Navbar title="HOME2" img={require('./assets/icon4.png')} active={false} />
      //        <Navbar title="HOME3" img={require('./assets/icon5.png')} />
      //        <Navbar title="HOME4" img={require('./assets/icon6.png')} />
      //         <Navbar title="HOME5" img={require('./assets/icon4.png')} />
      //         </View> */}
      //     <Navbarr />
      //   </View>

      //   {/* <View style={{ height: 54, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center' }}>
      //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      //     <View style={{ width: 26, height: 26, backgroundColor: 'blue' }}>
      //       <Image source={require('./assets/icon2.png')} />
      //     </View>
      //     <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Homes</Text>
      //   </View>

      //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //     <View style={{ width: 26, height: 26, backgroundColor: 'white' }}><Image source={require('./assets/icon3.png')} /></View>
      //     <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Orders</Text>
      //   </View>

      //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //     <View style={{ width: 26, height: 26, backgroundColor: 'white' }}><Image source={require('./assets/icon4.png')} /></View>
      //     <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Help</Text>
      //   </View>

      //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //     <View style={{ width: 26, height: 26, backgroundColor: 'white' }}><Image source={require('./assets/icon5.png')} /></View>
      //     <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Inboxs</Text>
      //   </View>

      //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //     <View
      //       style={{ width: 26, height: 26, backgroundColor: 'white' }}><Image source={require('./assets/icon6.png')} />
      //     </View>
      //     <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Account</Text>

      //   </View >

      //    </View> */}




      // </View >



    );
  }
}
//const styles = StyleSheet.create({
//container: {
//flex: 1,
//backgroundColor: '#fff',
//ignItems: 'center',
//justifyContent: 'center',
//},
//});

// const AppNavigator = createStackNavigator({

//   Home: {
//     screen: App,
//   },

// });

// export default createAppContainer(AppNavigator);

// const Stack = createStackNavigator();

// function AppNavigator() {
//   return (

//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={App} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
export default App;