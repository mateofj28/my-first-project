import axios from 'axios';

const API_URL = 'http://localhost:3000/students'; 

export const getData = async () => {
  try {
    const response = await axios.get(API_URL); 
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const deteleStudent = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`) 
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

export const updateStudent = async (id, newData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, newData) 
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

export const createStudent = async (newData) => {
  try {
    const response = await axios.post(API_URL, newData) 
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
