import React, {useEffect, useState} from 'react';
import Main from '../main/main';
import FetchData from '../../service/fetchData';
import './calendar.css';
import { NavLink } from 'react-router-dom';

const fetchData = new FetchData()

const Calendar = (props) => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetchData.getLaunches().then(data=>setData(data))
  },[])
  console.log(data);
return <>
<Main/>
<section className="calendar">
    <div className="container">
      <ul className="calendar-list">
        {data.map(d=>(
        <li className="calendar-item">
          <article className="launches">
            <div className="launches-image">
              <img src={d.links.patch.small} alt=""/>
            </div>
            <div className="launches-content">
              <h2 className="launches-title">{d.name}</h2>
              <NavLink to='/details' className="button launches-details">Подробнее</NavLink>
            </div>
          </article>
        </li>
        ))}
      </ul>
      </div>
</section>
</>

}
export default Calendar;