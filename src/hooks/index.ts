import { getUsers } from "../api"
import { User } from "../types";

// no funciona
export const checkUsers = async (data: Omit<User, "id"> ) => {
    const users = await getUsers();
    console.log(users);
    return users.find(user => {
        if(data.email === user.email){
            return true;
        }else{
            return false;
        }
    });
}