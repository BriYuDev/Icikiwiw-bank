import React, { Component } from 'react';
import styles, { layout } from '../style';
import Button from './button';
import { features } from '../constants';

class FeatureCard extends Component {
  state = {
    feature: this.props.feature,
  };
  render() {
    return (
      <div
        className={`flex flex-row p-6 rounded-[20px] ${
          this.state.feature.index !== this.state.feature.length - 1
            ? 'mb-6'
            : 'mb-0'
        } feature-card`}
      >
        <div
          className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-purple`}
        >
          <img
            src={this.state.feature.icon}
            alt='icon'
            className='w-[50%] h-[50%] object-contain'
            loading='lazy'
          />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
          <h4 className='font-poppins font-semibold sp-text text-[18px] leading-[23px] mb-1'>
            {this.state.feature.title}
          </h4>
          <p className='font-poppins font-normal card-text text-[16px] leading-[24px] mb-1'>
            {this.state.feature.content}
          </p>
        </div>
      </div>
    );
  }
}

class Business extends Component {
  state = {};
  render() {
    return (
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Mamang And Icikiwir</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            voluptatem dicta possimus nobis ipsa similique placeat libero facere
            tenetur sequi. Voluptatem repudiandae, dignissimos iste eligendi
            nostrum consequatur magni. Eaque, provident.
          </p>

          <Button styles='mt-10' />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Business;
