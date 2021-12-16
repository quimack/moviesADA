import { useState } from "react";
import { createUser } from "../../api";
import { CreateUser } from "../../components/forms/createUser";
import { checkUsers } from "../../hooks";


const SignUp = () => {

    const handleSubmit = () => {
    //  createUser(inputs);
    }

    return(
        <CreateUser />
    )
}

export { SignUp };