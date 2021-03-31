import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeDaysMin,
  changeDaysValue,
  changeDaysMax,
} from '../redux/actions/days';

function DaysSlider() {
  const dispatch = useDispatch();

  const daysMin = useSelector((state) => state.days.daysMin);
  const daysValue = useSelector((state) => state.days.daysValue);
  const daysMax = useSelector((state) => state.days.daysMax);

  return (
    <div className="Slider__item">
      <input
        type="text"
        className="Slider__input"
        value={daysMin || ''}
        onChange={(e) => dispatch(changeDaysMin(e.target.value))}
      />
      <div>
        <p className="Slider__text">Дни</p>
        <div className="Slider__wrapper">
          <input
            className="Slider__range Slider__range--red"
            type="range"
            name="days"
            id="days"
            min={daysMin}
            max={daysMax}
            value={daysValue || ''}
            onChange={(e) => dispatch(changeDaysValue(e.target.value))}
          />
        </div>
        <p className="Slider__text--center">{daysValue}</p>
      </div>
      <input
        type="text"
        className="Slider__input"
        value={daysMax || ''}
        onChange={(e) => dispatch(changeDaysMax(e.target.value))}
      />
    </div>
  );
}

export default DaysSlider;
