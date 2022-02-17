/* eslint-disable react/prop-types */
import React from 'react';

export default class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alt} />;
  }
}
