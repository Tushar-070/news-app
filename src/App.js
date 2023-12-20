import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=6;
  state={
    progress:0,
    apiKey:process.env.REACT_APP_NEWS_API
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
        height={2}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route path='/' element={<News apiKey={this.state.apiKey}setProgress={this.setProgress}key='general' pageSize={this.pageSize} country='in' category='general' />} />
          <Route path='/business' element={<News apiKey={this.state.apiKey}setProgress={this.setProgress}key='business' pageSize={this.pageSize} country='in' category='business' />} />
          <Route path='/entertainment' element={<News apiKey={this.state.apiKey}setProgress={this.setProgress}key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' />} />
          <Route path='/general' element={<News apiKey={this.state.apiKey}setProgress={this.setProgress}key='general' pageSize={this.pageSize} country='in' category='general' />} />
          <Route path='/health' element={<News apiKey={this.state.apiKey}setProgress={this.setProgress}key='health' pageSize={this.pageSize} country='in' category='health' />} />
          <Route path='/science' element={<News apiKey={this.state.apiKey}setProgress={this.setProgress}key='science' pageSize={this.pageSize} country='in' category='science' />} />
          <Route path='/sports' element={<News apiKey={this.state.apiKey}setProgress={this.setProgress}key='sports' pageSize={this.pageSize} country='in' category='sports' />} />
          <Route path='/technology' element={<News apiKey={this.state.apiKey}setProgress={this.setProgress}key='technology' pageSize={this.pageSize} country='in' category='technology' />} />
        </Routes>

      </div>
    )
  }
}
