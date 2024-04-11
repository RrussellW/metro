import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css'
import { Link } from 'react-router-dom';

export default function Login() {
    return(
        <html>
        <body>
            <div className='bg'>
                <Box
                    component="form"
                    sx={{
                        borderRadius: '16px',
                        backgroundColor: '#FFFFFF',
                        height: '500px',
                        width: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '100px',
                        marginInline: 'auto',
                        justifyContent: 'center',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h1>Sign In</h1>
                    <br />
                    <TextField id="outlined-basic" label="Email" variant="outlined" sx={{margin: '5px'}}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" sx={{marginBottom: '25px'}}/>
                    <Button variant="contained">
                        Login
                    </Button>
                    <br />
                    <p>
                    <Link to="/registration">Don't Have an Account? Sign Up</Link>
                    </p>
                </Box>
            </div>
        </body>
        </html>
    );
}