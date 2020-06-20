import React from 'react'
import { View, Image, TextInput } from 'react-native';

const MainSearch = (props) => {
    return (

        <View style={{ marginHorizontal: 17, flexDirection: 'row' }}>
            <View style={{ width: 26, backgroundColor: 'white', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../../assets/cipan.png')} />
            </View>
            <TextInput value="hi ainaaa asallll x tidurR agi" style={{ borderWidth: 1, borderColor: '#2C5FB8', borderRadius: 25, height: 40, fontSize: 14, paddingLeft: 100, paddingRight: 55 }} ></TextInput>
            <Image source={require('../../../../assets/search.png')} style={{ position: 'absolute', top: 5, left: 320, width: 35, height: 35 }} />
        </View>
    )
}
export default MainSearch;