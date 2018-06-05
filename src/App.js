import React, { Component } from 'react';
import $ from 'jquery';
import AreaSelect from './Components/AreaSelect';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      provinceList:[],
      cityList:[],
      countyList:[]
    }
    this.provinceChange=this.provinceChange.bind(this);
    this.cityChange=this.cityChange.bind(this);
  }
  getAreaData(){
    $.ajax({
      type:'GET',
      url:'../Datas/area.json',
      dataType:'json',
      success:function(data){
        this.setState({provinceList:data},function(){
          this.provinceChange(this.state.provinceList[0].code);
        });
      }.bind(this),
      error:function(xhr,status,err){

      }
    });
  }
  componentDidMount(){
    this.getAreaData();
  }
  provinceChange(value){
    let provinceList = this.state.provinceList;
    let provinceObj = provinceList.find(x => x.code === value);
    this.setState({cityList:provinceObj.city},function(){
      console.log(this.state.cityList);
      this.cityChange(this.state.cityList[0].code);
    });
  }
  cityChange(value){
    let cityList = this.state.cityList;
    let cityObj = cityList.find(x => x.code === value);
    this.setState({countyList:cityObj.city},function(){
      console.log(this.state.countyList);
    });
  }
  render(){
    return (
      <div className="App">
        <h3>React 生命周期</h3>
        <img alt="react_life.jpg" src="./react_life.jpg" />
        <h3>省市县联动</h3>
        <label><span>省：</span><span><AreaSelect dataChange={this.provinceChange} areaList={this.state.provinceList}/></span></label>
        <label><span>市：</span><span><AreaSelect dataChange={this.cityChange} areaList={this.state.cityList}  /></span></label>
        <label><span>县：</span><span><AreaSelect areaList={this.state.countyList}  /></span></label>
      </div>
    );
  }
}

export default App;
