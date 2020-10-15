import React from 'react';
import RelaxWrapper from 'react-rellax-wrapper'
import './features.css';
const img = {
  'Falcon 1':  'Falcon-1',
  'Falcon 9': 'Falcon-9',
  'Falcon Heavy': 'falcon-heavy',
  'other': 'starship',
}
const Features = (props) => {
  console.log(props);
  
return <section className="features">
<h2 className="features-title">
  {props.rocketFeatures.name} <br/>Overview
</h2>
<div className="overview">

  <table className="table">
    <caption className="table-title">
      Size
    </caption>
    <thead>
      <tr>
        <td className="table-column">HEIGHT</td>
        <td className="table-column">{props.rocketFeatures.height.meters} m/ {props.rocketFeatures.height.feet} ft</td>
      </tr>
      <tr>
        <td className="table-column">DIAMETER</td>
        <td className="table-column">{props.rocketFeatures.diameter.meters} m/{props.rocketFeatures.diameter.feet} ft</td>
      </tr>
      <tr>
        <td className="table-column">MASS</td>
        <td className="table-column">{props.rocketFeatures.mass.kg} kg /{props.rocketFeatures.mass.lb} lb</td>
      </tr>
      <tr>
        <td className="table-column">PAYLOAD TO LEO</td>
        <td className="table-column">{props.rocketFeatures.payload_weights.map(kg=>kg.kg)} kg /{props.rocketFeatures.payload_weights.map(lb=>lb.lb)} lb</td>
      </tr>
    </thead>
  </table>
  <RelaxWrapper speed={14}>
  <img
      src={`./img/${img.hasOwnProperty(props.rocket)
      ? img[props.rocket]
      : img.other}.png`}      
      alt="rocket"
      className="rocket"
  />
  </RelaxWrapper>
  <article>
    <h3 className="features-subtitle">DESCRIPTION</h3>
    <p className="features-text">
      {props.rocketFeatures.description }
    </p>
  </article>
</div>
</section>
}
export default Features;