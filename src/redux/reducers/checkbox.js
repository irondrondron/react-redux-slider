const initialState = {
  fiftyBucksStatus: false,
  oneHundredBucksStatus: false,
  twoHundredBucksStatus: false,
  fiftyBucksValue: 0,
  oneHundredBucksValue: 0,
  twoHundredBucksValue: 0,
};

const checkbox = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FIFTY_BUCKS_STATUS': {
      return {
        ...state,
        fiftyBucksStatus: action.payload,
        fiftyBucksValue: action.payload === true ? 50 : 0
      }
    }
    case 'CHANGE_ONE_HUNDRED_BUCKS_STATUS': {
      return {
        ...state,
        oneHundredBucksStatus: action.payload,
        oneHundredBucksValue: action.payload === true ? 100 : 0
      }
    }
    case 'CHANGE_TWO_HUNDRED_BUCKS_STATUS': {
      return {
        ...state,
        twoHundredBucksStatus: action.payload,
        twoHundredBucksValue: action.payload === true ? 200 : 0
      }
    }
    default:
      return state
  }
}

export default checkbox