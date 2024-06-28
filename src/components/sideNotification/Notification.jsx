import { useState, useEffect } from 'react'
import NavButton from '../navButton/NavButton';
import "./sideNotifiation.css"

function Notification() {
  const [showDiv, setShowDiv] = useState(false);

  const showDivHandler = () => {
    setShowDiv(!showDiv);
  };

  return (
    <section className="notification-section">
        <div className="notification" onClick={showDivHandler}>
          <i className="fa fa-comments"></i> Notification
        </div>
        <div className={`notication-div ${showDiv ? 'visible-div' : ''}`}>
          <p>Do you need a <span>professional website</span> or mobile application.?</p>
          <NavButton/>
          <div className="box"></div>
        </div>
    </section>
  )
}

export default Notification