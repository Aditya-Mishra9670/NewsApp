import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'en',  // Default language is set to English
    };
  }

  // Method to handle language changes
  handleLanguageChange = (language) => {
    this.setState({ selectedLanguage: language });
  };

  render() {
    return (
      <div>
        {/* Pass the handleLanguageChange method and selectedLanguage state to Navbar and News components */}
        <Navbar onLanguageChange={this.handleLanguageChange} />
        <News language={this.state.selectedLanguage} />
      </div>
    );
  }
}
