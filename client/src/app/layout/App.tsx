import {useState} from "react";
import {CssBaseline, Container, Box, Typography} from "@mui/material";
import Navbar from "./Navbar.tsx";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard.tsx";
import {useActivities} from "../../lib/hooks/useActivities.tsx";


export function App() {
    // create useState to save data
    // selectedActivity updates state later
    //for opening activityDetail
    const[selectedActivity, setSelectedActivity]=useState<Activity | undefined>(undefined);

    //for opening activity form
    const[editMode, setEditMode]= useState(false);

    const {activities, isPending}=useActivities();

    // handle to save selected activity to then pass to child component
    const handleSelectedActivity = (id: string) => {
        setSelectedActivity(activities!.find(act=>act.id === id));
    }

    const handleCancelSelectedActivity = ()=>{
        setSelectedActivity(undefined);
    }

    const handleOpenForm=(id?:string )=>{
        if(id) handleSelectedActivity(id);
        else handleCancelSelectedActivity();
        setEditMode(true);
    }

    const handleFormClose = ()=>{
        setEditMode(false);
    }

    return (
        <Box sx={{backgroundImage: 'radial-gradient(circle at 10% 20%, #e0f7fa 0%, transparent 50%)',
            bgcolor: '#f0f4f8', minHeight: '100vh',}}>
            <CssBaseline/>
            <Navbar openForm={handleOpenForm}/>
            <Container maxWidth='xl' sx={{marginTop: 3}}>

                {!activities || isPending ? (
                    <Typography>Loading...</Typography>
                ): (
                    <ActivityDashboard
                        activities={activities}
                        selectActivity={handleSelectedActivity}
                        cancelSelectActivity = {handleCancelSelectedActivity}
                        selectedActivity = {selectedActivity}
                        editMode={editMode}
                        openForm={handleOpenForm}
                        closeForm={handleFormClose}


                    />
                )}

            </Container>

        </Box>
    )
}


