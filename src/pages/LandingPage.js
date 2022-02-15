import React, { Component } from 'react';

import Button from 'elements/Button';
import Header from 'parts/Header';

export default function LandingPage(props) {
  return (
    <>
      <Header {...props}></Header>
    </>
  );
}

// --Class Component si Nara--
// export default class LandingPage extends Component {
//   render() {
//     return (
//       <>
//         <Header {...this.props}></Header>
//       </>
//     );
//   }
// }
