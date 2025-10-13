import { Grid, Typography} from "@mui/material";
import {useParams} from "react-router";
import {useActivities} from "../../../lib/hooks/useActivities.tsx";
import ActivityDetailsHeader from "./ActivityDetailsHeader.tsx";
import ActivityDetailsInfo from "./ActivityDetailsInfo.tsx";
import ActivityDetailsChat from "./ActivityDetailsChat.tsx";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar.tsx";



export default function ActivityDetailPage() {
    // const navigate = useNavigate();
    const {id} = useParams(); // need to match what is inside the router
    const {activity, isLoadingActivity} = useActivities(id);

    if(isLoadingActivity) return <Typography>Loading...</Typography>

    if(!activity) return <Typography>Activity not found</Typography>

    return (
       <Grid container spacing={3}>
            <Grid size={8}>
                <ActivityDetailsHeader activity={activity}/>
                <ActivityDetailsInfo activity={activity}/>
                <ActivityDetailsChat/>
            </Grid>

           <Grid size={4}>
               <ActivityDetailsSidebar/>
           </Grid>
       </Grid>
    )
}