import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { setMessage } from './actions/messageActions';

import Posts from './components/Posts';
import Loading from './components/Loading';

const PostForm = Loadable({
  loader: () => import(/* webpackChunkName: "postFormChunk" */'./components/Postform'),
  loading: Loading,
  modules: ['postFormChunk']
});

class App extends Component {
  componentDidMount() {
    if (!this.props.message) {
      this.props.setMessage("Hi, I am from client!!!");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
          <p>Redux: {this.props.message}</p>
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message.message
});

export default connect(mapStateToProps, { setMessage })(App);
