// rfce - to fill boilerplate code for a new component
// npm start - use this command in terminal to view the front end in browser

import React from 'react';
import ButtonStack from './components/buttons';
import logo from './components/logo.png';

function App() {
  const titleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  const subtitleStyle = {
    fontSize: '20px',
    textAlign: 'center',
    padding: '20px'
  };

  const mapStyle = {
    height: '100vh',
    width: '50%',
    float: 'left',
    padding: '20px'
  };

  const rightColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
  }

  const componentStyle = {
    padding: '20px'
  }

  return (
    <div>
      <center>
        <img src={logo}/>
      </center>

      <div style={titleStyle}>Women's World Banking</div>
      <div style={subtitleStyle}>First do the system precheck, then add the event to the calender.  </div>
     <div style={{ display: 'flex' }}>
        <div style={componentStyle}><ButtonStack /></div>
     </div>
    </div>
  );
}

export default App;


 