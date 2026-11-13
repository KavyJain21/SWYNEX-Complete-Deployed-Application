
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: `${API_URL}/api/listings`,
});

export const getAllListings = async () => {
  try {
    const response = await api.get("/");
    return response.data.data;
  } catch (error) {
    console.log("Error fetching listings:", error);
    throw error;
  }
};
