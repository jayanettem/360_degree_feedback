import axios from "axios";
const API_URL = "http://localhost:8089/api/result/";


const register = (q1,q2,q3,q4,q5,q6,cmnt) => {
  return axios.post(API_URL, {
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    cmnt
  });
}; 

export default {register};