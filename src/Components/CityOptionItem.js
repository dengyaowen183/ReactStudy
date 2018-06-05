import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CityOptionItem extends Component {
  constructor(){
    super();
    this.state={};
  }
  render(){
    return (
      <option value={this.props.area.code}>{this.props.area.name}</option>
    );
  }
}
CityOptionItem.propTypes={
  area:PropTypes.object
}
export default CityOptionItem;
