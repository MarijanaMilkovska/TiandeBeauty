import React from "react";
import products from '../library';

class Search extends React.Component {
  state = {
    value: "",
    products: Products,
    filterData: []
  };

  handleChange = e => {
    this.setState({
      filterData: this.state.products
    });
  };

  filterList = e => {
    const updatedList = this.state.products.filter(item => {
      return (
        item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ filterData: updatedList });
  };

  render() {
    const searchBox = (
      <input
        type="text"
        onClick={this.handleChange}
        onChange={this.filterList}
      />
    );
    const selectBox = this.state.filterData.map(option => (
      <li key={option.continent}>{option.continent}</li>
    ));

    return (
      <React.Fragment>
        <h2>Step 1</h2>
        <h3>Select a continent.</h3>
        {searchBox}
        {selectBox && <ul>{selectBox}</ul>}
      </React.Fragment>
    );
  }
}

export default Search;