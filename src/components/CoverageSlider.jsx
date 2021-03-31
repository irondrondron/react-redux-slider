import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCoverageMin,
  changeCoverageValue,
  changeCoverageMax,
} from '../redux/actions/coverage';

function CoverageSlider() {
  const dispatch = useDispatch();

  const coverageMin = useSelector((state) => state.coverage.coverageMin);
  const coverageValue = useSelector((state) => state.coverage.coverageValue);
  const coverageMax = useSelector((state) => state.coverage.coverageMax);

  return (
    <div className="Slider__item">
      <input
        type="text"
        className="Slider__input"
        value={coverageMin || ''}
        onChange={(e) => dispatch(changeCoverageMin(e.target.value))}
      />
      <div>
        <p className="Slider__text">Охват</p>
        <div className="Slider__wrapper">
          <input
            className="Slider__range Slider__range--green"
            type="range"
            name="coverage"
            id="coverage"
            min={coverageMin}
            max={coverageMax}
            value={coverageValue || ''}
            onChange={(e) => dispatch(changeCoverageValue(e.target.value))}
          />
        </div>
        <p className="Slider__text--center">{coverageValue}</p>
      </div>
      <input
        type="text"
        className="Slider__input"
        value={coverageMax || ''}
        onChange={(e) => dispatch(changeCoverageMax(e.target.value))}
      />
    </div>
  );
}

export default CoverageSlider;
