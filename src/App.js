import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

import Posts from './components/Posts';
import PostForm from './components/Postform';
import Loading from './components/Loading';

import store from './store';

// const PostForm = Loadable({
//   loader: () => import('./components/Postform'),
//   loading: () => Loading
// });

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
