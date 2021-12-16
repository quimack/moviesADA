import { Button, FormControl, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { useAuth } from "../../hooks/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, userSession } = useAuth();

    const handleSubmit = () => {
        logIn(email, password);
    }

    if(userSession){
        localStorage.setItem("user", JSON.stringify(userSession));
    }

    return(
        <>
        <Grid>
            <FormControl>
                <TextField id="email" label="E-mail" variant="outlined"
                onChange={(e)=> setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
                <TextField id="password" label="Password" variant="outlined" 
                onChange={(e)=> setPassword(e.target.value)} />
            </FormControl>
            <Button variant="contained" onClick={handleSubmit}>Login</Button>
        </Grid>
        <Grid>
            <p>Don't have an account yet?</p>
            <Button variant="outlined" href="/signup">Let's sign up!</Button>
        </Grid>
        </>
    )
}

export { Login };