import React, { Component } from 'react'
import { View, Image, Text, ScrollView } from 'react-native';
import ScrollableItems from '../../molecule/ScrollableItem';



class Scrollable extends Component {
    render() {
        return (
            < View >
                <View >
                    <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 18 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#61A756' }}>OUR CATEGORY</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#61A756' }}>SEE ALL</Text>
                    </View >
                    <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                        {/* <View style={{ marginBottom: 20, marginRight: 16 }} >
                            <View style={{ width: 150, height: 150, marginBottom: 0, backgroundColor: 'yellow' }}>
                                <Image source={require(' ../../../../assets/download.jpg')} style={{ borderRadius: 4, width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
                            </View >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ADIDAS</Text>
                        </View>

                        <View style={{ marginBottom: 20, marginRight: 16, marginHorizontal: 18 }} >
                            <View style={{ width: 150, height: 150, marginBottom: 0, backgroundColor: 'yellow' }}>
                                <Image source={require('../../../../assets/download.jpg')} style={{ borderRadius: 4, width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
                            </View >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ADIDAS</Text>
                        </View>

                        <View style={{ marginBottom: 20, marginRight: 16 }} >
                            <View style={{ width: 150, height: 150, marginBottom: 0, backgroundColor: 'yellow' }}>
                                <Image source={require('../../../../assets/download.jpg')} style={{ borderRadius: 4, width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
                            </View >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ADIDAS</Text>
                        </View>

                        <View style={{ marginBottom: 20, marginRight: 16 }} >
                            <View style={{ width: 150, height: 150, marginBottom: 0, backgroundColor: 'yellow' }}>
                                <Image source={require('../../../../assets/download.jpg')} style={{ borderRadius: 4, width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
                            </View >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ADIDAS</Text>
                        </View>

                        <View style={{ marginBottom: 20, marginRight: 16 }} >
                            <View style={{ width: 150, height: 150, marginBottom: 0, backgroundColor: 'yellow' }}>
                                <Image source={require('../../../../assets/download.jpg')} style={{ borderRadius: 4, width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
                            </View >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ADIDAS</Text>
                        </View> */}

                        <ScrollableItems title="ADIDAS" img={require('../../../../assets/download.jpg')} />
                        <ScrollableItems title="NIKE" img={require('../../../../assets/download.jpg')} />
                        <ScrollableItems title="KOSEN" img={require('../../../../assets/download.jpg')} />
                        <ScrollableItems title="AYOYO" img={require('../../../../assets/download.jpg')} />
                        <ScrollableItems title="FRANKIT" img={require('../../../../assets/download.jpg')} />
                        <ScrollableItems title="ALBOBO" img={require('../../../../assets/download.jpg')} />
                    </ScrollView>
                </View>
            </View >

        )
    }

}
export default Scrollable;
