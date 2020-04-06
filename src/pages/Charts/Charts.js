import React, { Component } from "react";
import BarTemp from "./bars";
import PieTemp from "./pie";
import { BrowserRouter } from "react-router-dom";

class Charts extends Component {
  render() {
    return (
      <BrowserRouter>
        <BarTemp />
        <PieTemp />
      </BrowserRouter>
    );
  }
}

export default Charts;
