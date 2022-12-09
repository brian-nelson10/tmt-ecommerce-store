import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Tooth from '../assets/icons/toothNoBg2.png';
import Copyright from "./Copyright";
import { Container,
         Button,
         IconButton,
         CssBaseline,
         Grid,
         Box,
         Typography} from '@mui/material/';
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
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                blue: '#33bfff'
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        onClick={(e) => { navigate("/home") }}
                        sx={{
                            color: 'white',
                            bgcolor: 'secondary.blue',
                            '&:hover': {
                                color: '#f44336',
                                bgcolor: 'secondary.blue'
                            }
                        }}>
                        <Tooth sx={{fontSize: '45px'}}/>
                    </IconButton>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <form onSubmit={handleFormSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        required
                                        name="firstName"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        required
                                        name="lastName"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="email"
                                        
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <input
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
                                sx={{ mt: 3, mb: 2, bgcolor: 'secondary.blue', borderRadius: '15px',
                                '&:hover': {
                                backgroundColor: '#f44336'
                            }}}
                            >
                                Sign Up
                            </Button>
                            </form>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    {/* <Link to="/" variant="body2">Home</Link> */}
                                    <Link to="/login" variant="body2">
                                        Already have an account?
                                    </Link>
                                </Grid>
                            </Grid>
                        
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
};

export default Signup;
