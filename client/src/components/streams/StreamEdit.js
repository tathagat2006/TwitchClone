import React from "react";
import { connect } from "react-redux";

const StreamEdit = props => {
  console.log(props);
  return <div>{this.props}</div>;
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(StreamEdit);
