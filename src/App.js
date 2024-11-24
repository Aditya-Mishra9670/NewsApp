import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedCategory: 'general',//Default category of news in general
      selectedLanguage: 'en',  // Default language is set to English
    };
   
    
  }

  // Method to handle language changes
  handleLanguageChange = (language) => {
    this.setState({ selectedLanguage: language });
  };
  handleCategoryChange = (category)=>{
    this.setState({SelectedCategory:category})
  }
  render() {
    return (
      <div>
        <Navbar onLanguageChange={this.handleLanguageChange} categoryselector ={this.handleCategoryChange} />
        <News language={this.state.selectedLanguage} category={this.state.SelectedCategory} />
      </div>
    );
  }
}
