import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.mappandas.com"
  /* other custom settings */
});

export const getLastN = async limit => {
  try {
    const response = await client.get(`/lastn/${limit}?featured=true`);
    if (response.status === 200) return response.data;

    return Promise.reject(
      "Unable to retrieve data from api server. Http code: " + response.status
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
