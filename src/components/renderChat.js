import React, { Component } from 'react';
import { changeRecipientUID } from '../store/action/action'
import { connect } from 'react-redux';
import ChatBox from './chatbox';
import RenderChatAction from '../store/action/action'

class RenderChat extends Component {

    constructor(props)
    {
        super(props)
        this.props.renderChat()
        this.state = {

            chats : []
        }
    }
    componentWillMount(){
        // console.log('componentWillMount')
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.saveChats   )
        var a = nextProps.saveChats 
        this.setState({
            chats : a
        })
        // console.log(a[0])
        // console.log(a[1])
        // console.log(a[2])
       this.state.chats.map((value, index) => {
    
   

            // console.log(value)
       
            })
        // console.log( this.state.chats)
        // this.props.renderChat()
    }

    render() {
        // console.log(this.state.chats[0])
        this.state.chats.map((value, index) => {
    
   

            // console.log(value)
       
            })
        // this.props.renderChat()
        let myData  = []
        //  myData = this.props.saveChats
        
var arr = [1,2,2,3,4]
        //  // console.log(arr)
// // console.log(myData[0])
// // console.log(myData[1])
// this.props.saveChats.map((value, index) => {
    
   

//         // console.log('hy')
   
//         })
        // // console.log(a, 'a')


        //  myData[0].chats 
        return (
            <div>
                <h1>wooo</h1>
            </div>


        )


    }



}
function mapStateToProp(state) {

    state.root.saveChats.map((value, index) => {
    
   

        // console.log(value)
   
        })
    // console.log(state.root)
    return ({
        currentUser: state.root.currentUser,
        saveChats: state.root.saveChats,
        // recipientID: state.root.recipientID,
        // messages : state.root.messages
        // allUsers: state.root.users,
        // allMessages: state.root.messages,
        // recipientID: state.root.recipientID


    })


}




function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        renderChat: () => {
            dispatch(RenderChatAction());
        }
    })
}


// export default RenderChat;
export default connect(mapStateToProp, mapDispatchToProp)(RenderChat);

// export default  connect(mapStateToProp, mapDispatchToProp)( RenderChat)

