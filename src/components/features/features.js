import React from 'react';
import RelaxWrapper from 'react-rellax-wrapper'
import { withRouter } from 'react-router-dom';
import Main from '../main/main';
import './features.css';
const img = {
  'Falcon 1':  'Falcon-1',
  'Falcon 9': 'Falcon-9',
  'Falcon Heavy': 'falcon-heavy',
  'other': 'starship',
}
const Features = (props) => {
  const {name, height,diameter,mass, payload_weights,description,history} = props
return <>
<Main rocket={props.rocket}/>
<section className="features">
<h2 className="features-title">
  {name} <br/>Overview
</h2>
<div className="overview">

  <table className="table">
    <caption className="table-title">
      Size
    </caption>
    <thead>
      <tr>
        <td className="table-column">HEIGHT</td>
        <td className="table-column">{height.meters} m/ {height.feet} ft</td>
      </tr>
      <tr>
        <td className="table-column">DIAMETER</td>
        <td className="table-column">{diameter.meters} m/{diameter.feet} ft</td>
      </tr>
      <tr>
        <td className="table-column">MASS</td>
        <td className="table-column">{mass.kg} kg /{mass.lb} lb</td>
      </tr>
      {payload_weights.map(p=>{
        return  <tr>
                  <td className="table-column">PAYLOAD TO {p.id.toUpperCase()}</td>
                  <td className="table-column">{p.kg} kg /{p.lb} lb</td>
                </tr>
      }
        
      )
      }
      
    </thead>
  </table>
  <RelaxWrapper speed={14}>
  <img
      src={`../../img/${img.hasOwnProperty(name)
      ? img[name]
      : img.other}.png`}      
      alt="rocket"
      className="rocket"
  />
  </RelaxWrapper>
  <article>
    <h3 className="features-subtitle">DESCRIPTION</h3>
    <p className="features-text">
      {description }
    </p>
  </article>
</div>
</section>

</>
}
export default withRouter(Features);