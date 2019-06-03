// src/App.js
import React, { Component } from 'react';
import ChatMessage from './ChatMessage';
import Signup from './Signup';
import ChatApp from './ChatApp';
import './style.css';

import { default as Chatkit } from '@pusher/chatkit-server';
const chatkit = new Chatkit({
  instanceLocator: "v1:us1:ecb0361a-ea31-4ac0-bd84-89703817b499",
  key: "dbd37dd7-d7e3-4044-a06b-a5d2ed6e6911:LUg3cNm9yBz1wZBpqxJHy+2BGkUxsRVAgNCGKPbN43E="
})


class ChatModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: '',
      currentId: '',
      currentView: 'signup'
    }
    this.changeView = this.changeView.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  createUser(username) {
    chatkit.createUser({
      id: username,
      name: username,
    })
      .then((currentUser) => {
        this.setState({
          currentUsername: username,
          currentId: username,
          currentView: 'chatApp'
        })
      }).catch((err) => {
        if (err.status === 400) {
          this.setState({
            currentUsername: username,
            currentId: username,
            currentView: 'chatApp'
          })
        } else {
          console.log(err.status);
        }
      });
  }

  changeView(view) {
    this.setState({
      currentView: view
    })
  }

  render() {
    let view = '';

    if (this.state.currentView === "ChatMessage") {
      view = <ChatMessage changeView={this.changeView} />
    } else if (this.state.currentView === "signup") {
      view = <Signup onSubmit={this.createUser} />
    } else if (this.state.currentView === "chatApp") {
      view = <ChatApp currentId={this.state.currentId} />
    }
    return (
      <div className="App">
        {view}
      </div>
    );
  }
}
export default ChatModule;