import axios from "axios";
import API_BASE_URL from "./index";

axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export const fetchAll = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/getPartners`);
    return response.data;
  } catch (error) {
    console.error("Error fetching partners:", error);
    throw error;
  }
};
export const create = async (partner) => {
  try {
    const response = await axios.post(`http://localhost:8080/api/partners`, partner);
    return response;
  } catch (error) {
    console.error("Error creating partner:", error);
    throw error;
  }
};
export const update = async (id) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/partners`, partner);
    return response;
  } catch (error) {
    console.error("Error updating partner:", error);
    throw error;
  }
};
export const remove = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/partners`, partner);
    return response;
  } catch (error) {
    console.error("Error deleting partner:", error);
    throw error;
  }
};
