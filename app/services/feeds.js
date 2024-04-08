import axios from "axios";
import API_BASE_URL from "./index";

axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export const fetchAll = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/getFeeds`);
    return response.data;
  } catch (error) {
    console.error("Error fetching feeds:", error);
    throw error;
  }
};
export const create = async (feed) => {
  try {
    const response = await axios.post(`http://localhost:8080/api/feeds`, feed);
    return response;
  } catch (error) {
    console.error("Error creating feed:", error);
    throw error;
  }
};
export const update = async (id) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/feeds`, feed);
    return response;
  } catch (error) {
    console.error("Error updating feed:", error);
    throw error;
  }
};
export const remove = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/feeds`, feed);
    return response;
  } catch (error) {
    console.error("Error deleting feed:", error);
    throw error;
  }
};
