const initialState = {
  coverageMin: 10000,
  coverageValue: 30000,
  coverageMax: 1000000,
};

const coverage = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COVERAGE_MIN': {
      return {
        ...state,
        coverageMin: action.payload
      }
    }
    case 'CHANGE_COVERAGE_VALUE': {
      return {
        ...state,
        coverageValue: action.payload
      }
    }
    case 'CHANGE_COVERAGE_MAX': {
      return {
        ...state,
        coverageMax: action.payload
      }
    }
    default:
      return state
  }
}

export default coverage