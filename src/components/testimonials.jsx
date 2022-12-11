import React, { Component } from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './feedbackcard';

class Testimonials extends Component {
  state = {};
  render() {
    return (
      <section
        id='clients'
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      >
        <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
          <h1 className={styles.heading2}>Icikiwr saying</h1>
          <div className='w-full md:mt-0 mt-6'>
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              voluptatem dicta possimus nobis ipsa similique placeat libero
              facere tenetur sequi. Voluptatem repudiandae, dignissimos iste
              eligendi nostrum consequatur magni. Eaque, provident.
            </p>
          </div>
        </div>

        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
          {feedback.map((card) => (
            <FeedbackCard
              key={card.id}
              card={card}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Testimonials;
