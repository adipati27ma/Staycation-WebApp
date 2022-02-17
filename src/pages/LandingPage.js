import React, { Component } from 'react';

import landingPage from 'json/landingPage.json';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';

export default function LandingPage(props) {
  const refMostPicked = React.createRef();

  return (
    <>
      <Header {...props}></Header>
      <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
      <MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked} />
      <Categories data={landingPage.categories} />
      <Testimoni />
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
