import React from 'react';
import { Route,BrowserRouter } from 'react-router-dom';
import Calendar from './components/calendar/calendar';
import Details from './components/details/details';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/Home/Home';
import './index.css';
import FetchData from './service/fetchData';
class App extends React.Component {
  fetchData = new FetchData();

  state={
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    company: null,
  };
  componentDidMount(){
    this.updateRocket();
    this.updateCompany();
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
  updateCompany = ()=>{
    this.fetchData.getCompany().then(company=>{
      this.setState({company}) 
    })
  }
  render(){
  return  <BrowserRouter>
            <Header changeRocket={this.changeRocket} rockets={this.state.rockets}/>
            {this.state.company && <Route exact path="/" render={ () => <Home company={this.state.company}/>}/>}
            <Route path="/rocket/:id" >
              {this.state.rocketFeatures !==null
                ? <Features {...this.state.rocketFeatures}  rocket={this.state.rocket}/>
                :''}
            </Route>
            <Route path="/calendar" render={ () => 
              <>
                <Calendar />  
              </>}
            />
            <Route path='/details/:id' >
              <Details/>
            </Route>
            
            {this.state.company && <Footer {...this.state.company.links}/>}
          </BrowserRouter>
  }
}

export default App;
