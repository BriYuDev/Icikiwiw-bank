import React, { Component } from 'react';
import styles from '../style';
import Button from './button';

class CTA extends Component {
  state = {};
  render() {
    return (
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-purple-gradient-2 rounded-[20px] box-shadow`}
      >
        <div className='flex-1 flex flex-col'>
          <h2 className={styles.heading2}>Let's try icikiwir</h2>
          <p className={`${styles.paragraph} mx-w-[470px] mt-5`}>
            everything is icikiwir, everywhere is icikiwir
          </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button />
        </div>
      </section>
    );
  }
}

export default CTA;
