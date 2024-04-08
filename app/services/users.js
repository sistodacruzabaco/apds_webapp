import axios from "axios";
import API_BASE_URL from "./index";

export const fetchAll = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
export const create = async (user) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, user);
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
export const update = async (id) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users`, user);
    return response;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
export const remove = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users`, user);
    return response;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
