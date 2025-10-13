import {CssBaseline, Container, Box} from "@mui/material";
import Navbar from "./Navbar.tsx";
import {Outlet, useLocation} from "react-router";
import HomePage from "../../features/home/HomePage.tsx";


export function App() {

    const location = useLocation();

    return (
        <Box sx={{
            backgroundImage: 'radial-gradient(circle at 10% 20%, #e0f7fa 0%, transparent 50%)',
            bgcolor: '#f0f4f8', minHeight: '100vh',
        }}>
            <CssBaseline/>
            {location.pathname === '/' ? <HomePage/> : (
                <>
                    <Navbar/>
                    <Container maxWidth='xl' sx={{marginTop: 3}}>
                        <Outlet/>
                    </Container>
                </>
            )}


        </Box>
    )
}


