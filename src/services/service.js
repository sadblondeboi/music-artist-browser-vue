import axios from "axios";

const baseURL = "http://109.173.167.138:3000";

export const service = axios.create({
  baseURL
});