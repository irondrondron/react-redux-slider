import React from 'react';
import CheckBox from './CheckBox';
import CoverageSlider from './CoverageSlider';
import DaysSlider from "./DaysSlider";
import Price from './Price';
import './Slider.sass';

function Slider() {
  return (
    <div className="Slider">
      <CoverageSlider />
      <DaysSlider />
      <CheckBox />
      <Price />
    </div>
  );
}

export default Slider;
