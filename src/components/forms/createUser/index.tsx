import { Button, FormControl, Grid, TextField } from "@mui/material"

export const CreateUser: FC = () => {
    return(
        <Grid>
            <FormControl>
                <TextField id="email" label="E-mail" variant="outlined"
                onChange={(e)=> setInputs({...inputs, email: e.target.value })} />
            </FormControl>
            <FormControl>
                <TextField id="password" label="Password" variant="outlined" 
                onChange={(e)=> setInputs({...inputs, password: e.target.value })} />
            </FormControl>
            <FormControl>
                <TextField id="firstName" label="First name" variant="outlined" 
                onChange={(e)=> setInputs({...inputs, first_name: e.target.value })}/>
            </FormControl>
            <FormControl>
                <TextField id="lastName" label="Last name" variant="outlined" 
                onChange={(e)=> setInputs({...inputs, last_name: e.target.value })}/>
            </FormControl>

            <Button variant="contained" onClick={handleSubmit}>Sign Up</Button>
        </Grid>
    )
}