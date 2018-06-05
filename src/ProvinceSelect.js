import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CityOptionItem from './CityOptionItem';



class ProvinceSelect extends Component {
  constructor(){
    super();
    this.state={};
  }
  render(){
    let provincesElement;
    if(this.props.provinces){
      provincesElement = this.props.provinces.map((province,index)=>{
        return (<CityOptionItem key={index} area={province} />);
      });
    }
    return (
      <select className="citys">
        {provincesElement}
      </select>
    );
  }
}
ProvinceSelect.propTypes={
  provinces:PropTypes.object
}
export default ProvinceSelect;
