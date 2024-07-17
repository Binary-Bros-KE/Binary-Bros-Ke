import React, { useState } from 'react';
import './simpleFAQ.css';
import TypicalHeader from '../typicalHeader/typicalHeader';
import { socialMediaFAQ } from '../../../../constants/SocialMediaMarketing';
import { AnimatePresence, motion } from 'framer-motion';

const SimpleFAQ = () => {
  // Frequently Asked Questions State
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="FAQs">
      <TypicalHeader Title={"Frequently Asked Questions"} subTitle={"FAQs"} />
      
      <div className="FAQs-content">
        {socialMediaFAQ.map((question, index) => {
          const isActive = activeQuestion === index;
          return (
            <div className="FAQ-item" key={question.id}>
              <div className="FAQ-question" onClick={() => toggleQuestion(index)}>
                <h1>{question.question}</h1>
                <i className={`fa fa-${isActive ? 'minus' : 'plus'}`}></i>
              </div>
              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="FAQ-answer"
                  >
                    {question.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SimpleFAQ;
