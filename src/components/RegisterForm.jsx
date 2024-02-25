import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as NavLink } from 'react-router-dom'

const userTemp = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};
// const validateData = () => { };

export default function SignUp() {
    const [user, setUser] = useState({ ...userTemp });
    const [error, setError] = useState({ ...userTemp });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        setError(true);
    };

    const inputHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };
    return (
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
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={inputHandler}
                                error={!!error['firstName']}
                                helperText={error['firstName']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                onChange={inputHandler}
                                error={!!error['firstName']}
                                helperText={error['firstName']}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={inputHandler}
                                error={!!error['firstName']}
                                helperText={error['firstName']}
                                type="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={inputHandler}
                                error={!!error['firstName']}
                                helperText={error['firstName']}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        color='primary'
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid item>
                        <Link variant='body2'>
                            <NavLink to="/login">Already have an account ? Login</NavLink>
                        </Link>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
