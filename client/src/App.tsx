import {useEffect, useState} from "react";
import {ListItem, Typography, List, ListItemText} from "@mui/material";
import  axios from "axios";




export function App() {
    // create useState to save data
    // setActivities updates state later
    //specify type of activities
    const [activities, setActivities] = useState<Activity[]>([]);

    //runs once a component render
    useEffect(() => {
        //return a promise
        //use then to unwrap it
        axios.get<Activity[]>('https://localhost:5001/api/activities')
            .then(response => setActivities(response.data))

        //cleanup code
        return () => {
        };
    }, []);

    return (
        <>
            <Typography variant='h1'>Evently</Typography>
            <List>
                {activities.map((activity) => (
                    <ListItem key={activity.id}>
                        <ListItemText>{activity.title}</ListItemText>
                    </ListItem>
                ))}

            </List>
        </>

    )
}


