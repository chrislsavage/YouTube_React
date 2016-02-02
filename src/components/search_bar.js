import React, {Component} from 'react';

// above is the same as saying const Component = React.Component

class SearchBar extends Component {
  constructor(props) {
    super(props); //have to call super or you get an error
    this.state = { term: '' };  //state has a property that we want to record on the state.  term updates the user input.
  }
  render() { //this is the default way of defining methods on a class as a function
    return (
      <div className="search-bar">
      <input
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  };
  //A controlled field is a form element that is set by the state.
  //Whenever you want to manipulate value of input you want to use state.
  //always use setState to inform react that the state is changing...you must return jsx for it to not throw an error...this refers to the event Handler //On change is a react property
//one one line you can get rid of the bananas around (event)

  // onInputChange(event) { //or handleInputChange
  //   console.log(event.target.value);//this is redfined above using a arrow function
  // }
}
// every react class must have a render method
// const SearchBar = () => {
//   return <input />;
// }
// use a functional component unless you need added functionality.

export default SearchBar;

//declare event handler...and pass event
