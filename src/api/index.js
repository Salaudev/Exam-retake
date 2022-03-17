import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "http://universities.hipolabs.com/",

});
// http://universities.hipolabs.com/search?name=Information&country=uzbekistan /x/name=Information&
export const getNewsByCategory = async (category = "Uzbekistan") => {
  try {
    const res = await instanceAxios.get(`/search?name=${''}&country=${category}`);
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
