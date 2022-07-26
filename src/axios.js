import axios from "axios";

const instance = axios.create({
 
  baseURL: 'http://localhost:5001/shopaholic-7be4c/us-central1/api'
 
});

export default instance;