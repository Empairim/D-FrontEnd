import api from "./apiConfig.js";

//this mirrors the backend its a way to set up like "routes" in backend it allows for code to be simple and easy to understand and keep the code "dry". this is pretty much all the end points and Rahul just exported them so that you can reference to the api call using the function name licharacters or createCat ect rather than typing out the logic for the api calls in the components themselves

//get all sailor scouts
export const getCharacters = async () => {
  try {
    const response = await api.get("/characters");
    return response.data;
  } catch (error) {
    console.error("Error: Getting all Sailor Scouts: ", error);
  }
};
//get by name
export const getCharacterByName = async () => {
  try {
    const response = await api.get("/characters");
    return response.data;
  } catch (error) {
    console.error("Error: Getting one of the Sailor Scouts: ", error);
  }
};
//get by id
export const getCharacter = async (id) => {
  try {
    const response = await api.get(`/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Getting one of the Scouts: ", error);
  }
};
//create character
export const createcharacter = async (charactersData) => {
  try {
    const response = await api.post("/characters", charactersData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
//edit character
export const editCharacter = async (id, charactersData) => {
  try {
    const response = await api.put(`/characters/${id}`, charactersData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
// delete character
export const deleteCharacter = async (id) => {
  try {
    const response = await api.delete(`/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
