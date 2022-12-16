import React, { useState } from 'react';
import './login.css';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Pink from '../assets/images/toothBurstPink.png'
import { CssBaseline, Container, Grid, Box, Typography, Button, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
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
        <Container maxWidth="xs" className="loginContainer" sx={{ bgcolor: 'main.peach', height: '100%', width: '100%'}}>
            
            <CssBaseline />
            <Grid
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <ThemeProvider theme={theme}>
                    {/* <IconButton
                        onClick={(e) => { navigate("/") }}
                        sx={{
                            bgcolor: 'main.peach'
                        }}> */}
                        <img onClick={(e) => { navigate("/")}} alt="pink tooth logo" src={Pink} style={{ cursor: 'pointer'}}>
                       
                       </img>
                    {/* </IconButton> */}
                    <Typography component="h1" variant="h5" sx={{ fontFamily: 'fontFamily.Lacquer', fontSize: '100px', fontWeight: '900px' }}>
                        Login
                    </Typography>
                    <form onSubmit={handleFormSubmit}>
                        <Box sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        id="password"
                                        label="Password"
                                        type="password"
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3, mb: 2, bgcolor: 'main.pink', borderRadius: '15px',
                                    '&:hover': {
                                        backgroundColor: 'main.deep'
                                    }
                                }}>
                                Login
                            </Button>
                            {error ? (
                                <div>
                                    <p className="error-text">The provided credentials are incorrect</p>
                                </div>
                            ) : null}
                            <Grid container justifyContent="space-between">
                                <Grid item justifyContent="flex-end">
                                    <Link to="/signup" variant="body2">
                                        Dont have an account?
                                    </Link>
                                </Grid>

                            </Grid>
                        </Box>
                    </form>
                </ThemeProvider>
            </Grid>
        </Container>
    );
}

export default Login;