import {useStore} from "../../lib/hooks/useStore.ts";
import { observer} from "mobx-react-lite";
import {Button, Box, List, ButtonGroup, Typography, ListItem, Paper} from "@mui/material";

export default observer(function Counter() {

    const {counterStore} = useStore();

    return (
        <Box display="flex" justifyContent="space-between">
            <Box sx={{width:'60%'}}>
                <Typography variant="h4" gutterBottom>{counterStore.title}</Typography>
                <Typography variant="h6">Count is:{counterStore.count}</Typography>

                <ButtonGroup sx={{mt: 3}}>
                    <Button onClick={() => counterStore.decrement()} variant="contained" color="error">
                        Decrement
                    </Button>
                    <Button onClick={() => counterStore.increment()} variant="contained" color="success">
                        Increment
                    </Button>
                    <Button onClick={() => counterStore.increment(5)} variant="contained" color="inherit">
                        Increment by 5
                    </Button>
                </ButtonGroup>
            </Box>

            <Paper sx={{width:'40%', p:4}}>
                <Typography variant='h4'>Counter events ({counterStore.eventCount})</Typography>
                <List>
                    {counterStore.events.map((event,i)=>(
                        <ListItem key={i}>{event}</ListItem>
                        ))}
                </List>
            </Paper>

        </Box>

    )
})