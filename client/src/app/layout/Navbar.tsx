import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import {Group} from "@mui/icons-material";

type Props = {
    openForm: () => void
}

export default function Navbar({openForm}: Props) {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar
                position="static"
                sx={{
                    background: "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                        {/* Logo */}
                        <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                            <Group fontSize="large"/>
                            <Typography variant="h4" fontWeight="bold">
                                Evently
                            </Typography>
                        </Box>

                        {/* Navigation buttons */}
                        <Box sx={{display: "flex", gap: 5}}>
                            <Button
                                variant="outlined"
                                sx={{

                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                    color: "rgba(255,255,255,0.85)",
                                    borderColor: "rgba(255,255,255,0.5)",
                                    "&:hover": {
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                        borderColor: "rgba(255,255,255,0.8)",
                                    },
                                }}
                            >
                                Activities
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{

                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                    color: "rgba(255,255,255,0.85)",
                                    borderColor: "rgba(255,255,255,0.5)",
                                    "&:hover": {
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                        borderColor: "rgba(255,255,255,0.8)",
                                    },
                                }}
                            >
                                Contact
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{

                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                    color: "rgba(255,255,255,0.85)",
                                    borderColor: "rgba(255,255,255,0.5)",
                                    "&:hover": {
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                        borderColor: "rgba(255,255,255,0.8)",
                                    },
                                }}
                            >
                                Blog
                            </Button>
                        </Box>


                        <Button onClick={openForm}
                                size="large" variant="contained" color="primary">
                            Create Activity
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
