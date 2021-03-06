import React from 'react';
import './main.css';
const video ={
  'Falcon 1':  'moon',
  'Falcon 9': 'earth',
  'Falcon Heavy': 'mars',
  'other': 'space',
}
const Main = (props) => {
return <section className="main">
          <h1 className="title">
            {props.rocket? props.rocket : 'Календарь SpaceX'}
          </h1>
            {props.rocket
          
              ? <div className="video-container"> <video 
                  className="video" 
                  autoPlay loop muted 
                  src={`../../video/${video.hasOwnProperty(props.rocket) 
                  ? video[props.rocket]
                  : video.other}.mp4`}/>
              
          </div>
          : '' 
        }
        </section>
}
export default Main;