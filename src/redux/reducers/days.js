const initialState = {
  daysMin: 1,
  daysValue: 123,
  daysMax: 180
};

const days = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DAYS_MIN': {
      return {
        ...state,
        daysMin: action.payload
      }
    }
    case 'CHANGE_DAYS_VALUE': {
      return {
        ...state,
        daysValue: action.payload
      }
    }
    case 'CHANGE_DAYS_MAX': {
      return {
        ...state,
        daysMax: action.payload
      }
    }
    default:
      return state
  }
}

export default days