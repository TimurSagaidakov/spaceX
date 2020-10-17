import React from 'react';
import { withRouter } from 'react-router-dom';
import Details from './details';

const DetailsContainer =(props)=>{
  return <Details />
}

export default withRouter(DetailsContainer)