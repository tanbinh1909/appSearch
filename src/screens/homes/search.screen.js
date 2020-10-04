import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

export class SearchScreen extends Component {
    renderFilters = () => {
        return (
          <View>
            <TextInput
              isNormal = {true}
              isArea = {false}
            />
          </View>
        );
      };
    render() {
        return (
            <View style={{flex:1, flexDirection:'column'}}>
                {this.renderFilters()}
            </View>
        )
    }
}

export default SearchScreen
