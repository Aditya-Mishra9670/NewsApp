import React, { Component } from 'react';
import Newsitems from './Newsitems';
import loadingGif from './loading-gif.gif'; // Importing the loading GIF

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [], // Holds the list of articles
      page: 1, // Tracks the current page
      totalResults: 0, // Tracks the total number of results
      loading: true // Tracks whether data is loading
    };
  }

  // Fetch news when the component mounts or when language/page changes
  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps) {
    // If the language prop changes, re-fetch the news
    if (prevProps.language !== this.props.language || prevProps.category !==this.props.category) {
      this.fetchNews(); // Re-fetch news when the language changes
    }
  }

  // Method to fetch news articles from API
  fetchNews = async () => {
    this.setState({ loading: true }); // Show loading before fetch
    const currentDate = new Date().toISOString().split('T')[0];
    let url = `https://newsapi.org/v2/top-headlines?from=${currentDate}&sortBy=publishedAt&apiKey=25f323b9bf5446d2a37830b13524fb76&page=${this.state.page}&pageSize=12&language=${this.props.language}&category=${this.props.category}`;
    console.log("Fetching news from URL:", url); // Log the URL for debugging
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false // Hide loading after fetch
    });
  }

  // Handle next button click
  handleNextClick = () => {
    this.setState(
      { page: this.state.page + 1 },
      this.fetchNews // Fetch news after incrementing the page
    );
  }

  // Handle previous button click
  handlePrevClick = () => {
    this.setState(
      { page: this.state.page - 1 },
      this.fetchNews // Fetch news after decrementing the page
    );
  }

  render() {
    // Calculate total number of pages
    const totalPages = Math.ceil(this.state.totalResults / 12);

    return (
      <div>
        <div className='container'>
          <h2>Headlines</h2>

          {/* Display loading GIF if data is being fetched */}
          {this.state.loading ? (
            <div className="text-center">
              <img src={loadingGif} alt="loading..." />
            </div>
          ) : (
            <>
              <div className='row item-center'>
                {this.state.articles.map((element, i) => (
                  <div className='col-md-4' key={i}>
                    <Newsitems
                      title={element.title ? element.title.slice(0, 30) + "..." : ""}
                      description={element.description ? element.description.slice(0, 59) + "..." : ""}
                      btntxt="Read More"
                      imgUrl={element.urlToImage ? element.urlToImage : "https://www.freeiconspng.com/uploads/no-image-icon-10.png"}
                      redirect={element.url ? element.url : ""}
                    />
                  </div>
                ))}
              </div>

              {/* Pagination buttons */}
              <div className="d-flex justify-content-between my-2">
                <button
                  type="button"
                  disabled={this.state.page <= 1}
                  className="btn btn-secondary mx-2"
                  onClick={this.handlePrevClick}
                >
                  &larr; Previous
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.handleNextClick}
                  disabled={this.state.page >= totalPages}
                >
                  Next &rarr;
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default News;
