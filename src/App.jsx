import React, { Component } from 'react';
import Style from './Style';
import {
  Billing,
  CTA,
  Footer,
  Hero,
  NavBar,
  Stats,
  Testimonials,
  CardDeal,
  Clients,
  Business,
} from './components/exporter';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${Style.paddingX} ${Style.flexCenter}`}>
          <div className={`${Style.boxWidth}`}>
            <NavBar />
          </div>
        </div>

        <div className={`bg.primary ${Style.flexStart}`}>
          <div className={`${Style.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg.primary ${Style.flexStart} ${Style.paddingX}`}>
          <div className={`${Style.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
