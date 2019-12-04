import { FETCH_REPORTS } from '../constants'
import fetch from "isomorphic-fetch";
import { BACKEND_SERVER_PORT } from "../constants";


const BASE_URL = 'api/requests'

export const fetchReports = async (count, cursor) => dispatch => {
  const response = await fetch(
    `http://localhost:${BACKEND_SERVER_PORT}/${BASE_URL}?count=${count}&cursor=${cursor}`
  );
  console.log(response)
  dispatch({
    type: FETCH_REPORTS, 
    payload: {
      reports: (response.json()).reports
    }
  })
}