import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export class SearchCompanyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listSearch: []
        }
    }
    renderFilters = () => {
        return (
          <View style={styles.row}>
                  <View style={{padding:5, marginTop:7}}>
                    <View style={styles.searchBar}>
                          <Ionicons name="ios-search" color="gray" size={20} />
                              <TextInput  style={{flex:1, paddingHorizontal:10, }}
                              placeholder="Nhập từ khóa cần tìm"
                              />
                    </View>
                  </View>
          </View>
        );
      }

      renderHeaderSearchJob = () =>{
        return(
          <View>
            <View style={styles.headerSearch}>
              <View>
                <Text style={styles.text}>
                  Có <Text style={styles.total}>0</Text> kết quả:
                </Text>
              </View>
            </View>
          </View>
        );
      }
    render() {
        return (
            <View style={styles.container} >
                {this.renderFilters()}
                {this.renderHeaderSearchJob()}
                <View>
                    {this.state.listSearch > 0 ? (
                        <FlatList
                        CellRendererComponent={ViewOverflow}
                        data = {this.state.listSearch}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderSearch}
                      />
                    ): (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Text
                            style={{
                                fontSize: 15,
                                fontWeight: "bold",
                                color: "#CCCCCC",
                                marginTop: 15
                            }}
                            >
                            Không có dữ liệu
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        )
    }
    renderSearch = () => {
        return (
            <View></View>
        )
    }
}


export default SearchCompanyScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection:'column',
    },
    row : {
        height:60,
        width: '100%',
        backgroundColor:'#CFD8DC'
    },
    row_1: {
        flex:1,
        flexDirection:'row',
        
    },
    row_2: {
        flex:1,
        flexDirection:'row',
        
    },
    headerSearch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10
      },
    total: {
    fontSize: 15,
    color: "red",
    fontWeight: "bold"
    },
    text: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
    },
    searchBar: {
      width: '100%',
      height: 40,
      flexDirection:'row',
      backgroundColor:'#f2f2f2',
      borderRadius:10,
      alignItems:'center',
      paddingHorizontal: 15
  }
})
