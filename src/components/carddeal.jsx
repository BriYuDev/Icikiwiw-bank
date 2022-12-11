import React, { Component } from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './button';

class CardDeal extends Component {
  state = {};
  render() {
    return (
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Find icikiwir for eazy steps.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            voluptatem dicta possimus nobis ipsa similique placeat libero facere
            tenetur sequi. Voluptatem repudiandae, dignissimos iste eligendi
            nostrum consequatur magni. Eaque, provident.
          </p>

          <Button styles='mt-10' />
        </div>

        <div className={layout.sectionImg}>
          <img
            src={card}
            alt='card'
            className='w-[100%] h-[100%]'
          />
        </div>
      </section>
    );
  }
}

export default CardDeal;
