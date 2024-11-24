import React, { Component } from 'react';

export class Navbar extends Component {
  lang = ['ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'sv', 'ud', 'zh'];

  // Call the onLanguageChange function passed as a prop
  handleButtonClick = (language) => {
    this.props.onLanguageChange(language);
  };

  handleCategoryClick = (category) => {
    this.props.categoryselector(category);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">FastNews</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose Language
                  </a>
                  <ul className="dropdown-menu">
                    {this.lang.map((language, index) => (
                      <li key={index}>
                        <button className='dropdown-item' onClick={() => this.handleButtonClick(language)}>
                          {language}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <span className="nav-link" aria-current="page" style={{ cursor: "pointer" }} onClick={() => this.handleCategoryClick("general")}>General</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" aria-current="page" style={{ cursor: "pointer" }} onClick={() => this.handleCategoryClick("business")}>Business</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" aria-current="page" style={{ cursor: "pointer" }} onClick={() => this.handleCategoryClick("entertainment")}>Entertainment</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" aria-current="page" style={{ cursor: "pointer" }} onClick={() => this.handleCategoryClick("health")}>Health</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" aria-current="page" style={{ cursor: "pointer" }} onClick={() => this.handleCategoryClick("science")}>Science</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" aria-current="page" style={{ cursor: "pointer" }} onClick={() => this.handleCategoryClick("sports")}>Sports</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" aria-current="page" style={{ cursor: "pointer" }} onClick={() => this.handleCategoryClick("technology")}>Tech</span>
                </li>

              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
