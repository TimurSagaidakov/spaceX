import React from 'react';
import Calendar from './components/calendar/calendar';
import Details from './components/details/details';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import './style.css';
function App() {
  return <>
    <Header/>
    <Main/>
    <Features/>
    <Details/>
    <Calendar/>
    <Footer/>
</>
}

export default App;
