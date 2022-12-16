import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Pink from '../assets/images/toothBurstPink.png';
import Copyright from "./Copyright";
import { Container,
         Button,
         CssBaseline,
         Grid,
         Box,
         Typography,
         TextField} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const theme = createTheme({
    palette: {
        main: {
            peach: 'rgb(246, 217, 180)',
            pink: 'rgb(255, 142, 162)',
            deep: 'deeppink'
        },
    },
    typography: {
        fontFamily: [
            'Lacquer'
        ].join(','),
       },});

    return (
        
            <Container maxWidth="md" className="loginContainer" sx={{ bgcolor: 'main.peach', height: '100%', width: '100%'}}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <ThemeProvider theme={theme}>
                    <img onClick={(e) => { navigate("/")}} alt="pink tooth logo" src={Pink} style={{ cursor: 'pointer'}}>
                       
                       </img>
                       <Typography component="h1" variant="h5" sx={{ fontFamily: 'fontFamily.Lacquer', fontSize: '90px', fontWeight: '900px' }}>
                        Create an Account
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <form onSubmit={handleFormSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        placeholder="First Name"
                                        required
                                        name="firstName"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        placeholder="Last Name"
                                        required
                                        name="lastName"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="email"
                                        
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="password"
                                        placeholder="Password"
                                        required
                                        name="password"
                                        
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: 'main.pink', borderRadius: '15px',
                                '&:hover': {
                                backgroundColor: 'main.deep'
                            }}}
                            >
                                Sign Up
                            </Button>
                            </form>
                            <Grid container justifyContent="space-between">
                                <Grid item justifyContent="center">
                                    {/* <Link to="/" variant="body2">Home</Link> */}
                                    <Link to="/login" variant="body2">
                                        Already have an account?
                                    </Link>
                                </Grid>
                            </Grid>
                        
                    </Box>
        </ThemeProvider>

                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
    );
};

export default Signup;
