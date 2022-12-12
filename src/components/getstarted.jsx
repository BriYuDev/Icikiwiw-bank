import React, { Component } from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

class GetStarted extends Component {
  state = {};
  render() {
    return (
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-purple-gradient-2 p-[2px] cursor-pointer gt-str`}
      >
        <div
          className={`${styles.flexCenter} w-[100%] h-[100%] flex-col rounded-full bg-gtstr`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className='font-poppins font-medium text-[18px] leading-[23px] mr-1'>
              <span className='text-purple-gradient'>Get</span>
            </p>
            <img
              src={arrowUp}
              alt='arrow'
              className='w-[23px] h-[23px] object-contain mr-2'
              loading='lazy'
            />
          </div>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-purple-gradient'>Started</span>
          </p>
        </div>
      </div>
    );
  }
}

export default GetStarted;
