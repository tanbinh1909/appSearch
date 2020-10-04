import React, { Component } from 'react'
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import Dialog, {DialogFooter, DialogButton, DialogContent} from 'react-native-popup-dialog';
import FilePickerManager from 'react-native-file-picker';
import {connect} from 'react-redux';
import {HIDE_MODAL} from '../../actions/modal.action';
export class ModalPostJobScreen extends Component {

    render() {
        const {modals} = this.props;
        return (
            <View style={{flex:1}}>
                <Dialog
                    visible={modals}
                    onTouchOutside={() => {this.props.hideModal()}}
                    footer={
                        <DialogFooter>
                          <DialogButton
                            text="CANCEL"
                            onPress={() => {}}
                          />
                          <DialogButton
                            text="OK"
                            onPress={() => {}}
                          />
                        </DialogFooter>
                      }
                    width={300}
                    height={400}
                >
                    <DialogContent>
                        <View style={{flex:1}}>
                            <Text>Nhập thôn tin CV xin việc</Text>
                            <View>
                                <Text>Tiêu đề:</Text>
                                <TextInput placeholder="nhập tiêu đề"/>
                            </View>
                            <View>
                                
                            </View>
                            <TouchableOpacity onPress={() => this.props.hideModal()}>
                                <Text>Hủy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.hideModal()}>
                                <Text>Đồng ý</Text>
                            </TouchableOpacity>
                        </View>
                    </DialogContent>
                </Dialog>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {...state.modal}
}
const mapDispatchToProps = dispatch => {
    return {
        hideModal : () => dispatch({type: HIDE_MODAL})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ModalPostJobScreen)
