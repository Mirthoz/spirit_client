import axios from "axios";

export function testBE(number: number) {
  return axios.get(`https://spiritapp-production.up.railway.app/record/${number}`);
}