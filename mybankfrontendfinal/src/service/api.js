import axios from "axios";

const api_url = "http://localhost:7070/user/register";
export const addUser = async (data) => {
  try {
    return await axios.post(api_url, data);
  } catch (error) {
    console.log("error while calling addUser Api", error.message);
  }
};
const api_url2 = "http://localhost:7070/user/login";
export const isloged = async (data) => {
  try {
    return await axios.post(api_url2, data);
  } catch (error) {
    console.log("error while  login  Api", error.message);
  }
};
const api_url3 = "http://localhost:7070/user";
export const getuser = async (data) => {
  try {
    return await axios.get(`${api_url3}/${data}`);
  } catch (error) {
    console.log("error while getting user by id", error.message);
  }
};
