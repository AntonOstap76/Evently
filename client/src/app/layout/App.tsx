import {CssBaseline, Container, Box} from "@mui/material";
import Navbar from "./Navbar.tsx";
import { Outlet } from "react-router";


export function App() {
    return (
        <Box sx={{
            backgroundImage: 'radial-gradient(circle at 10% 20%, #e0f7fa 0%, transparent 50%)',
            bgcolor: '#f0f4f8', minHeight: '100vh',
        }}>
            <CssBaseline/>
            <Navbar/>
            <Container maxWidth='xl' sx={{marginTop: 3}}>
               <Outlet/>
            </Container>

        </Box>
    )
}


