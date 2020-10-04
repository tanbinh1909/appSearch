import React, { Component } from 'react'
import { Text, View, StyleSheet , TouchableOpacity, Image, Dimensions} from 'react-native'

export class SlideJob extends Component {
    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity style={{width,justifyContent: 'center', alignItems:'center'}}>
                <Text>{item.name}</Text>
                <Text>{item.location}</Text>
            </TouchableOpacity>
        )
    }
}
const { width, height } = Dimensions.get('window');
export default SlideJob

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
        width:'100%',
    }
});