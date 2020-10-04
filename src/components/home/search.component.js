import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export class SearchComponent extends Component {
    onPress  () {

    }
    render() {
        return (
            <View style={{justifyContent: 'center'}}>
                <Icon.Button name="search" color="black" backgroundColor="gray" style={{marginLeft:40, height:40}} onPress={() => this.props.navigation.navigate('SearchJobScreen')}>Tìm kiếm việc làm, nhà tuyển dụng</Icon.Button>
            </View>
        )
    }
}

export default SearchComponent
