import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeFiftyBucksStatus,
  changeOneHundredBucksStatus,
  changeTwoHundredBucksStatus,
} from '../redux/actions/checkbox';

function CheckBox() {
  const dispatch = useDispatch();

  const fiftyBucksStatus = useSelector(
    (state) => state.checkbox.fiftyBucksStatus,
  );
  const oneHundredBucksStatus = useSelector(
    (state) => state.checkbox.oneHundredBucksStatus,
  );
  const twoHundredBucksStatus = useSelector(
    (state) => state.checkbox.twoHundredBucksStatus,
  );

  return (
    <div className="CheckBox">
      <div className="CheckBox__item">
        <input
          className="CheckBox__input"
          type="checkbox"
          name="fiftyBucks"
          id="fiftyBucks"
          defaultChecked={fiftyBucksStatus}
          onClick={(e) => dispatch(changeFiftyBucksStatus(e.target.checked))}
        />
        <label htmlFor="fiftyBucks">50$</label>
      </div>
      <div className="CheckBox__item">
        <input
          className="CheckBox__input"
          type="checkbox"
          name="oneHundredBucks"
          id="oneHundredBucks"
          defaultChecked={oneHundredBucksStatus}
          onClick={(e) => dispatch(changeOneHundredBucksStatus(e.target.checked))}
        />
        <label htmlFor="oneHundredBucks">100$</label>
      </div>
      <div className="CheckBox__item">
        <input
          className="CheckBox__input"
          type="checkbox"
          name="twoHundredBucks"
          id="twoHundredBucks"
          defaultChecked={twoHundredBucksStatus}
          onClick={(e) => dispatch(changeTwoHundredBucksStatus(e.target.checked))}
        />
        <label htmlFor="twoHundredBucks">200$</label>
      </div>
    </div>
  );
}

export default CheckBox;
