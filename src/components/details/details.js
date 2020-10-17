import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import YouTube from 'react-youtube';
import FetchData from '../../service/fetchData';
import Loader from '../loader/loader';
import './details.css';


const fetchData = new FetchData()
const Details = (props) => {
  
  const [data, setData] = useState(0);

    useEffect(()=>{
      fetchData.getOneLaunches(props.match.params.id).then(data=>setData(data))
    },[])
   
    if(data===0){
      return <Loader/>
    }
return <>
<main className="details">
          <h1 className="title">
            {data.name}
          </h1>
<div className="container">
  <div className="details-row">
    <div className="details-image">
      <img src={data.links.patch.small} alt=""/>
    </div>
    <div className="details-content">
      <p className="details-description">{data.details}</p>
    </div>
  </div>
    <YouTube className='details-youtube' videoId={data.links.youtube_id} />
</div>
<button className="button button-back" onClick={()=>{
  props.history.goBack()
}}>go back</button>
</main>
</>
}
export default withRouter(Details) ;