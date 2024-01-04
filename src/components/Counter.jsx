import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
       <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <section className="counter" id="counter">
          <div className="counter-header">
            <h3>Our Impact</h3>
            <h1>Key Metrics</h1>
          </div>
          <div className="counter-cards">

            <div className="counter-card">
              <div className="card-icon">
                <div className="card-icon-holder">
                  <i className="fa fa-code"></i>
                </div>
              </div>
              <div className="card-info">
                <div className="counter-number">
                  {counterOn && (
                    <CountUp start={0} end={235} duration={2} delay={0} />
                  )}{" "}
                  +
                </div>
                <h1>Projetcs Completed</h1>
              </div>
            </div>

            <div className="counter-card">
              <div className="card-icon">
                <div className="card-icon-holder">
                  <i className="fa fa-users"></i>
                </div>
              </div>
              <div className="card-info">
                
                <div className="counter-number">
                  {counterOn && (
                    <CountUp start={0} end={230} duration={2} delay={0} />
                  )}{" "}
                  +
                </div>
                <h1>Satisfied Clients</h1>
              </div>
            </div>

            <div className="counter-card">
              <div className="card-icon">
                <div className="card-icon-holder">
                  <i className="fa fa-globe"></i>
                </div>
              </div>
              <div className="card-info">
                
                <div className="counter-number">
                  {counterOn && (
                    <CountUp start={0} end={25} duration={2} delay={0} />
                  )}{" "}
                  +
                </div>
                <h1>Global Presence</h1>
              </div>
            </div>

            <div className="counter-card">
              <div className="card-icon">
                <div className="card-icon-holder">
                  <i className="fa fa-cogs"></i>
                </div>
              </div>
              <div className="card-info">
                
                <div className="counter-number">
                  {counterOn && (
                    <CountUp start={0} end={10} duration={2} delay={0} />
                  )}{" "}
                  +
                </div>
                <h1>Technologies Mastered</h1>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>

    </div>
  )
}

export default Counter
