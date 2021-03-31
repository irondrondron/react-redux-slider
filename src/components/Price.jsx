import React from 'react';
import { useSelector } from 'react-redux';

function Price() {
  const coverageValue = useSelector((state) => state.coverage.coverageValue);
  const daysValue = useSelector((state) => state.days.daysValue);
  const fiftyBucksValue = useSelector(
    (state) => state.checkbox.fiftyBucksValue,
  );
  const oneHundredBucksValue = useSelector(
    (state) => state.checkbox.oneHundredBucksValue,
  );
  const twoHundredBucksValue = useSelector(
    (state) => state.checkbox.twoHundredBucksValue,
  );

  const sum =
    coverageValue / 100 +
    fiftyBucksValue +
    oneHundredBucksValue +
    twoHundredBucksValue;

  const discount = Math.floor(daysValue / 10);

  const sumWithDiscount = (sum, discount) => {
    for (let i = 0; i < discount; i++) {
      sum *= 0.95;
    }
    return sum;
  };

  const rounded = (value) => value.toFixed(2);

  return (
    <div className="Price">
      <p className="Price__text">
        {`Цена: ${rounded(sumWithDiscount(sum, discount))}$ (${rounded(
         (sumWithDiscount(sum, discount)/daysValue)
        )}$ в день)`}
      </p>
    </div>
  );
}

export default Price;
