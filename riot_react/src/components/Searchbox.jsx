import React from "react";

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.props.handleSearch;
  }

  render() {
    return (
      <input
        type="text"
        className="font-bold block w-full px-10 py-2 text-black-600 bg-white border rounded-full focus:border-purple-600 focus:ring-purple-600 focus:outline-none focus:ring focus:ring-opacity-40"
        onChange={(e) => this.handleSearch(e.target.value)}
        placeholder="Search..."
      />
    );
  }
}
