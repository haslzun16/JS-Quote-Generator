const API =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
  state = {
    quotes: [],
    index: 0
  };

  //API CALL
  componentDidMount() {
    // call the API and update state
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ quotes: res.quotes });
      });
  }
  handleQuote() {
    const ranNumber = Math.floor(Math.random() * this.state.quotes.length);
    console.log(this.state.quotes.length);
    this.setState({
      index: ranNumber
    });
  }

  render() {
    const { quotes, index } = this.state;
    const quote = quotes[index];

    return (
      <div
        className="test d-flex  align-items-center justify-content-center"
        id="quote-box"
      >
        <div className="box p-4">
          <div className=" col-xs-4">
            {quote && <p id="text">{quote.quote} </p>}
            {quote && <p id="author">-{quote.author} </p>}
          </div>
          <div className="row">
            <div className="col">
              <a id="tweet-quote" href="twitter.com/intent/tweet">Twitter</a>
            </div>
            <div className="col-xs-2">
              <button id="new-quote" onClick={this.handleQuote.bind(this)}>New quote</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
