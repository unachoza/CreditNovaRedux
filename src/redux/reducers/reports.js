import { FETCH_REPORTS } from '../constants/constants'

const initialState = {
  reports: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPORTS:
      return { ...state, reports: action.payload }
    default: 
      return state
  }
}