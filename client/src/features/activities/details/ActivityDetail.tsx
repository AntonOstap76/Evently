import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Link, useNavigate, useParams} from "react-router";
import {useActivities} from "../../../lib/hooks/useActivities.tsx";



export default function ActivityDetail() {
    const navigate = useNavigate();
    const {id} = useParams(); // need to match what is inside the router
    const {activity, isLoadingActivity} = useActivities(id);

    if(isLoadingActivity) return <Typography>Loading...</Typography>

    if(!activity) return <Typography>Activity not found</Typography>

    return (
        <Card sx={{borderRadius:3}} variant="outlined">
            <CardMedia
            component='img'
            src={`/images/categoryImages/${activity.category}.jpg`}
            />
            <CardContent>
                <Typography variant="h5" color="textSecondary">{activity.title}</Typography>
                <Typography variant="subtitle1" fontWeight="light">{activity.date}</Typography>
                <Typography variant="body1">{activity.description}</Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/edit/${activity.id}`} color="primary" variant='outlined'>Edit</Button>
                <Button onClick={()=>navigate('/activities')} color="inherit" variant='outlined'>Cancel</Button>
            </CardActions>
        </Card>
    )
}