import React from "react";
// import {PLANT} from './plant-data'

import Card from './card'
import Top from './Top/Top'
import Bottom from './Bottom/index'
import Title from './Title/Title'

import './styles.css'

export default function DigitalPlant() {
  return (
    <Card >
      <Top />
      <Title />
      <Bottom />
    </Card>
  );
}
