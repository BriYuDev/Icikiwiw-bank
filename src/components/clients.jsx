import React, { Component } from 'react';
import { clients } from '../constants';
import styles from '../style';

class Clients extends Component {
  state = {};
  render() {
    return (
      <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map((client) => (
            <div
              key={client.id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
            >
              <img
                src={client.logo}
                alt='client'
                className='logo-cmpny sm:w-[192px] w-[100px] object-contain'
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Clients;
