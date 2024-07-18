import { useState, useEffect } from 'react'
import Button from '../genericButton/genButton';
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
          <Button text={"<i class='fab fa-whatsapp'></i> Whatsapp"} width={"230px"} showArrow={true} to={"whatsapp://send?phone=+254791880412&text=Hi,%20Binary%20Bros%20Team,%20Please%20send%20me%20a%20quote%20for..."}/>
          <Button text={"<i class='fa fa-envelope'></i> Email"} width={"230px"} showArrow={true} to={"mailto:binarybroske@gmail.com?subject=Hi,%20Service%20Inquiry"}/>
          <Button text={"<i class='fab fa-facebook'></i> Facebook"} width={"230px"} showArrow={true} to={"https://www.facebook.com/profile.php?id=61553668976790"}/>
          <Button text={"<i class='fab fa-instagram'></i> Instagram"} width={"230px"} showArrow={true} to={"https://www.instagram.com/binary_bros.ke/"}/>
          <div className="box"></div>
        </div>
    </section>
  )
}

export default Notification