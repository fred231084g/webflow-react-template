import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

import {
  Navbar,
  Header,
  Slider,
} from './components';

class Banner extends React.Component {
  static propTypes = propTypes

  constructor(props) {
    super(props);

    this.state = {
      x: '',
    };
  }

  componentDidMount() {
    WebflowJs(); // eslint-disable-line
  }

  render() {
    return (
      <div className="banner">
        <Navbar />
        <Header />
        <Slider />
      </div>
    );
  }
}

export default Banner;
