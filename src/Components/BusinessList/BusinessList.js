import React, { Component } from "react";
import Business from "../Business/Business";
import "../BusinessList/BusinessList.css";

export default class BusinessList extends Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business) => {
          return <Business business={business} />;
        })}
      </div>
    );
  }
}
