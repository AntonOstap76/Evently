import {useLocation} from "react-router";
import {Paper, Typography} from "@mui/material";

export default function ServerError() {

    const {state} = useLocation();

    return (
            <Paper>
                {state.error ? (
                    <>
                        <Typography gutterBottom variant="h3" sx={{px:4, pt:2}}>
                            {state.error?.message || 'There a is error'}
                        </Typography>
                        <Typography variant="body1" sx={{p:4}}>
                            {state.error?.details || 'Server Error'}
                        </Typography>
                    </>
                ):(
                    <Typography variant="h5">Server error</Typography>
                )}
            </Paper>
    )
}