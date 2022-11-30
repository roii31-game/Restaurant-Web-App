import React, { Component } from "react";
import Business from "../Business/Business";
import "../BusinessList/BusinessList.css";

export default class BusinessList extends Component {
  render() {
    return (
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
}
