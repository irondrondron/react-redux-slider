export const changeCoverageMin = (coverageMin) => ({
  type: 'CHANGE_COVERAGE_MIN',
  payload: coverageMin,
});

export const changeCoverageValue = (coverageValue) => ({
  type: 'CHANGE_COVERAGE_VALUE',
  payload: coverageValue,
});

export const changeCoverageMax = (coverageMax) => ({
  type: 'CHANGE_COVERAGE_MAX',
  payload: coverageMax,
});