import React, { Component } from 'react';

import { InputNumber, InputDate } from 'elements/Form';
import Breadcrumb from 'elements/Breadcrumb';
export default class Example extends Component {
  state = {
    // --Comp. InputNumber
    // value: '1',
    // --Comp. InputDate
    // value: {
    //   startDate: new Date(),
    //   endDate: new Date(),
    //   key: 'selection',
    // },
  };

  // ---Comp. InputNumber & InputDate
  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  render() {
    // ---Comp. Breadcrumb
    const breadcrumbList = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: '100vh' }}
        >
          <div className="col-auto">
            {/* <InputNumber
              max={30}
              suffix="night"
              isSuffixPlural
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            /> */}
            {/* <InputDate
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            /> */}
            <Breadcrumb data={breadcrumbList} />
          </div>
        </div>
      </div>
    );
  }
}
