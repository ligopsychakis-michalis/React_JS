import React from 'react';
import QuoteMachine from './components/QuoteMachine';
import {Grid} from '@material-ui/core';

const styles = {
  display: 'flex',
  height : '100vh',
  alignItems: 'center' 
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    };
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
    this.nextQuoteClickHandler = this.nextQuoteClickHandler.bind(this);
  }

  componentDidMount(){
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
      .then(data => data.json())
      .then(res => this.setState({ quotes: res }))
      .then( () => this.setState({ selectedQuoteIndex: this.selectQuoteIndex() }));
  }


  //custom methods
  nextQuoteClickHandler(){
    this.setState({ selectedQuoteIndex: this.selectQuoteIndex()});
  }

  selectQuoteIndex(){
    if (this.state.quotes.length > -1){
      return Math.round(Math.random() * this.state.quotes.length - 1);
    }
    return;
  }

  get selectedQuote(){
    if (this.state.quotes.length > -1 && this.state.selectedQuoteIndex){
      return this.state.quotes[this.state.selectedQuoteIndex];
    };
    return "";
  }


  //render method
  render(){
    return (
      <Grid style={styles} className="App" id="quote-box" justify="center" container>
        <Grid xs={11} lg={12} item>
        <QuoteMachine selectedQuote = {this.selectedQuote} nextQuoteClickHandler = {this.nextQuoteClickHandler}/>
        </Grid>
      </Grid>
    );
  }
}

export default App;
