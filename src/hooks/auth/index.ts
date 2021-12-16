import { useState } from "react";
import { getUsers } from "../../api";
import { User } from "../../types";

const useAuth = () => {
    const [userSession, setUserSession] = useState<User>(
      JSON.parse(localStorage.getItem("user")!)
    );

    const logIn = async (email: string, password: string) => {
        const allUsers = await getUsers();

        const userLogged = allUsers.find((user) => {
          if (user.email === email && user.password === password) {
            return true;
          }
          return false;
        });
    
        console.log(userLogged);
    
        if (userLogged) {
          setUserSession({ ...userLogged, password: null });
        }
      };
      
      return { logIn, userSession, setUserSession };
}

export { useAuth };