import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore ,applyMiddleware} from 'redux';
import reducers from './test/redux/reducers/indexReducer';
import ReduxThunk from 'redux-thunk' ;
import RootStack from './test/Roots';
import {
  I18nManager,
} from 'react-native';
I18nManager.forceRTL(false);
export default class ReduxScreen extends Component {

  
  render() {
    return (
        <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
          <RootStack/>
        </Provider>

    );
  }
}

