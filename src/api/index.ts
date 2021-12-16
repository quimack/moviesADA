import { api } from "../utils"

const mapToArray = (object: any) => {
    const array = [];
  
    for (const elem in object) {
      array.push({
        id: elem,
        ...object[elem],
      });
    }
  
    return array;
};

type Payload = {
    email: string,
    password: string,
    first_name: string,
    last_name: string
}

export const createUser = async (data: Payload) => {
    await api.post("/users.json", data)
} 

export const getUsers = async () => {
  try{
      const response = await api.get("/users.json");
      return mapToArray(response.data)
  } catch (err){
    console.log(err);
    throw new Error('There is an error');
  }
}

