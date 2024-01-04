import React from 'react'
import NavButton from './NavButton';

function Notification() {
  return (
    <section className="notification-section">
        <div className="notification">
          <i className="fa fa-comments"></i> Notification
        </div>
        <div className="notication-div">
          <p>Do you need a profession website or mobile application.?</p>
          <NavButton/>
          <div className="box"></div>
        </div>
    </section>
  )
}

export default Notification