import axios from "axios";
import API_BASE_URL from "./index";

axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export const fetchAll = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/getProjects`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
export const create = async (project) => {
  try {
    const response = await axios.post(`http://localhost:8080/api/projects`, project);
    return response;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};
export const update = async (id) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/projects`, project);
    return response;
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
};
export const remove = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/projects`, project);
    return response;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
};
