import React, { Component } from 'react';

import landingPage from 'json/landingPage.json';
import Header from 'parts/Header';
import Hero from 'parts/Hero';

export default function LandingPage(props) {
  return (
    <>
      <Header {...props}></Header>
      <Hero data={landingPage.hero} />
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
