import {Box, Button, Card, CardActions, CardContent, Chip, Typography} from "@mui/material";
import {useActivities} from "../../../lib/hooks/useActivities.tsx";
import { Link } from "react-router";


type Props = {
    activity: Activity
}

export default function ActivityCard({activity}: Props) {

    const {deleteActivity} = useActivities();

    return (
        <Card sx={{borderRadius: 4}} variant='outlined'>
            <CardContent>
                <Typography gutterBottom variant='h5'>{activity.title}</Typography>
                <Typography sx={{color: 'text.secondary', mb: 1}}>{activity.date}</Typography>
                <Typography variant="body2">{activity.description}</Typography>
                <Typography variant="subtitle1">{activity.city}/{activity.venue}</Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'space-between', pb: 2}}>
                <Chip label={activity.category} variant='outlined'/>
                <Box display='flex' gap={1}>
                    <Button component={Link} to={`/activities/${activity.id}`} size='medium' variant='outlined'>Views</Button>
                    <Button onClick={() => deleteActivity.mutate(activity.id)}
                            size='medium'
                            variant='outlined'
                            color='error'
                            disabled={deleteActivity.isPending}
                    >Delete</Button>
                </Box>
            </CardActions>

        </Card>
    )
}