import React, { Component } from 'react'
import { Text, View, StyleSheet , BackHandler, FlatList, TouchableOpacity, Dimensions, Image, ScrollView, ActivityIndicator} from 'react-native'
import SearchComponent from '../../components/home/search.component';
import Toast from "@remobile/react-native-toast";
import SwiperFlatList from 'react-native-swiper-flatlist';
import Images from '../../constants/images';
import SlideJob from '../../components/home/slideJob';
import { GET_LIST_POST_RECRUTMENT, 
         GET_LIST_POST_RECRUTMENT_SLIDE,
         GET_LIST_POST_RECRUTMENT_LIMIT} from '../../actions/postRecrument.action';
import {connect} from 'react-redux';
console.disableYellowBox = true
let backHandlerClickCount = 0;
export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postRecruitmentsLimit : [],
      images : Images.slide_2,
      loadingLimit: false,
      postRecruitmentsSlide: [],
      limit: 5
    }
  }
  UNSAFE_componentWillMount = async() => {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const { postRecruitmentsLimit, postRecruitmentsSlide } = nextProps;
    let data = {postRecruitmentsLimit, postRecruitmentsSlide};
    return data;
  }

  componentDidMount = () =>{
    this.props.loadPostRecruitmentLimit(this.state.limit);
    this.props.loadPostRecruitmentSlide();
    this.setState({loadingLimit: true})
  }
     // click goback exit app
  onBackButtonPressAndroid = () => {
      backHandlerClickCount += 1;
      if(this.props.navigation.isFocused()){
        if ((backHandlerClickCount < 2)) {
          Toast.show("nhấn thêm 1 lần nữa");
        } else {
          BackHandler.exitApp();
        }
      // timeout for fade and exit
        setTimeout(() => {
          backHandlerClickCount = 0;
        }, 2000);
        return true;
      }
  }
  renderCategory = ({item}) => {
    return(
      <TouchableOpacity style={{height:120,
         borderRadius:5, borderWidth:1,
          borderColor:'#EEEEEE', marginLeft:10,
           justifyContent:'center', alignItems:'center',
           flexDirection:'row',}} onPress={() => this.props.navigation.navigate("PostJobDetailScreen", {postJob: item})}>
             <View style={{flex:1, padding:5}}>
               <Text>{item.address}</Text>
               <Text>{item.title}</Text>
               <Text>{item.nameTypeJob}</Text>
             </View>
              <View style={{flex:1}}>
              <Image
                style={{height:80, width:130}}
                source={Images.slide_2}
              />
                  <Text style={{alignItems:'flex-end', marginLeft:50, color:'red'}}>40 phút trước</Text>
              </View>
      </TouchableOpacity>
    )
  }

  renderFooterCategory = () =>{
    return(
      <View>
        {
        !this.state.loadingLimit ? 
          <View style={{marginTop:10, alignItems:'center'}}>
          <ActivityIndicator size={'large'} color="red"/>
        </View>: null
        }
      </View>
      
    )
  }
  handleLoadMore = () => {
    this.props.loadPostRecruitmentLimit(this.state.limit+5);
    this.setState({loadingLimit: true, limit: this.state.limit+5});
  }
  render() {
    const {navigation, postRecruitments, loading} = this.props;
    const {postRecruitmentsLimit, postRecruitmentsSlide} = this.state;
      return (
          <View style={styles.container}>
            <View>
            <SearchComponent navigation={this.props.navigation}/>
            </View>
                  <View style={{flex:1}}>
                      {!loading ? (
                        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                           <ActivityIndicator size="large" color="red"/>
                        </View>
                      ): (
                        <ScrollView 
                          showsVerticalScrollIndicator={false} 
                          showsHorizontalScrollIndicator={false}
                          style={{flex:1}} >
                          <View style={styles.slide}>
                            {postRecruitmentsSlide && postRecruitmentsSlide.length > 0 ? (
                                <SwiperFlatList style={styles.slideData}
                                autoplay
                                autoplayDelay={3}
                                index={1}
                                autoplayLoop
                                data={postRecruitmentsSlide}
                                renderItem={({item}) =>
                                    <TouchableOpacity style={styles.containerSlideJob} onPress={() => this.props.navigation.navigate("PostJobDetailScreen",  {postJob: item})}>
                                      <Text style={styles.fontTextSlideJobName}>{item.title.toUpperCase()}</Text>
                                      <Text>{item.address}</Text>
                                    </TouchableOpacity>
                                  }
                                keyExtractor={(item, index) => index.toString()}
                                showPagination
                                >
                            </SwiperFlatList>
                            ): (
                              <View style={{alignItems:'center'}}>
                                 <Text>Không có dữ liệu</Text>
                              </View>
                            )}
                        
                          </View>
                          <View style={{flex:1, marginTop:10}}>
                            <View style={{height:20, flexDirection:'row'}}>
                              <Text style={{flex:1, color:'green'}}>Việc làm mới:</Text>
                              <TouchableOpacity style={{flex:1, flexDirection:'row-reverse'}} onPress={() => navigation.navigate("PostJobScreen")}>
                                  <Text style={{color:'green'}}>Xem tất cả</Text>
                              </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                              {
                              postRecruitmentsLimit && postRecruitmentsLimit.length > 0 ? (
                                <FlatList
                                  horizontal={false}
                                  showsHorizontalScrollIndicator={false}
                                  showsVerticalScrollIndicator={false}
                                  data = {postRecruitmentsLimit}
                                  keyExtractor={(item, index) => index.toString()}
                                  renderItem={this.renderCategory}
                                  // ListFooterComponent={this.renderFooterCategory}
                                  // onEndReached={this.handleLoadMore}
                                  // onEndReachedThreshold={1}
                                />
                              ): (
                                <View style={{alignItems:'center'}}>
                                  <Text>Không có dữ liệu</Text>
                                </View>
                              )
                              }
                            </View>
                          </View>
                          <View style={{marginTop:10, alignItems:'center'}}>
                             <TouchableOpacity onPress={() => this.handleLoadMore()}>
                                <Text>Xem thêm >></Text>
                             </TouchableOpacity>
                          </View>
                        </ScrollView>
                      )}
                        
                  </View>
                
              
          </View>
      )
  }
}
const { width, height } = Dimensions.get('window');
const mapStateToProps = state => {
  return {...state.postRecruitment};
}
const mapDispatchToProps = dispatch => {
  return {
    loadPostRecruitment : () => dispatch({type: GET_LIST_POST_RECRUTMENT}),
    loadPostRecruitmentSlide : () => dispatch({type: GET_LIST_POST_RECRUTMENT_SLIDE}),
    loadPostRecruitmentLimit : (pageCurrent) => dispatch({type: GET_LIST_POST_RECRUTMENT_LIMIT, pageCurrent})
  };
}
export default connect(mapStateToProps, mapDispatchToProps) (HomeScreen)

const styles = StyleSheet.create({
    container : {
        flexDirection: 'column',
        padding:10,
        flex:1
    },
    slide: {
      height:160,
      flexDirection:'row',
      marginTop:5
    },
    slideData: {
      flexDirection:'row',
      backgroundColor:'#80CBC4'
    },
    containerSlideJob: {
      width,
      justifyContent: 'center', 
      alignItems:'center'
    },
    fontTextSlideJobName: {
      fontSize:18,
      fontWeight:'bold',
      justifyContent:'center',
      alignItems:'center'
    },
    image: {
      height:40,
      width:100,
      resizeMode: 'cover'
    },
})
