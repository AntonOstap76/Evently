
import {Box, Button, MenuItem, Paper, Typography} from "@mui/material";
import {Link} from "react-router";

export default function HomePage(){
    return (
        <Paper
            sx={{
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
            }}
        >
            <Box sx={{
                display: 'flex', alignItems: 'center', alignContent: 'center',
                color: 'white', gap: 3}}
            >

                <MenuItem >
                    <img
                        src="/images/logoW.png"
                        alt="Evently"
                        style={{ height: 200, width: 250, cursor: 'pointer' }}
                    />
                </MenuItem>
            </Box>
            <Typography variant="h2">
                Welcome to Evently!
            </Typography>
            <Button
                component={Link}
                to='/activities'
                size="large"
                variant="contained"
                sx={{height: 80, borderRadius: 4, fontSize: '1.5rem'}}
            >
                Take me to the activities!
            </Button>
        </Paper>
    )
}