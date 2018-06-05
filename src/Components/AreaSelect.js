import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CityOptionItem from './CityOptionItem';



class ProvinceSelect extends Component {
  constructor(){
    super();
    this.state={};
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    if(this.props.dataChange){
      this.props.dataChange(this.refs.area_option.value);
    }
  }
  render(){
    let element;
    if(this.props.areaList){
      element = this.props.areaList.map((area,index)=>{
        return (<CityOptionItem key={index} area={area} />);
      });
    }
    return (
      <select onChange={this.handleChange} ref="area_option" className="area_select">
        {element}
      </select>
    );
  }
}
ProvinceSelect.propTypes={
  areaList:PropTypes.array,
  dataChange:PropTypes.func
}
export default ProvinceSelect;
