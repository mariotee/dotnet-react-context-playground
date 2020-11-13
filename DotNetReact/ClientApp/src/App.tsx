import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from 'components/Layout';
import { Home } from 'Pages/Home';
import { FetchData } from 'Pages/FetchData';
import { Counter } from 'Pages/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
