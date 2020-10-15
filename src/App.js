import React from 'react';
import { Route } from 'react-router-dom';
import Calendar from './components/calendar/calendar';
import Details from './components/details/details';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import './index.css';
import FetchData from './service/fetchData';
class App extends React.Component {
  fetchData = new FetchData();

  state={
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [
      //{name:null,height:null,diametr: null,mass: null}

    ],
  };
  componentDidMount(){
    this.updateRocket();
  }
  updateRocket(){
    this.fetchData.getRocket()
    .then(data=>{
      this.setState({rockets: data.map(item => item.name ) })
      return data
    })
    .then(data=> data.find(item => item.name === this.state.rocket))
    .then(rocketFeatures => {
      this.setState ({rocketFeatures}) 
    })
  }
  
  changeRocket = (rocket) => {
    this.setState({
      rocket
    },
    this.updateRocket);
  }
  render(){
    
  return <>
    <Header changeRocket={this.changeRocket} rockets={this.state.rockets}/>
    <Route path="/" render={ () =><Main rocket={this.state.rocket} />}/>
    <Route path="/calendar" render={ () =><Calendar />}/>
    {this.state.rocketFeatures !==null?
    <Features rocketFeatures={this.state.rocketFeatures} rocket={this.state.rocket}/>
    :''}
    <Footer/>
  </>
  }
}

export default App;
