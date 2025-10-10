import {Grid} from "@mui/material"
import ActivityList from "./ActivityList.tsx";
import ActivityDetail from "../details/ActivityDetail.tsx";
import ActivityForm from "../form/ActivityForm.tsx";

// for receiving from parent component
type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity?: Activity;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean;

}

//destructuring
export default function ActivityDashboard({
                                              activities, selectActivity,
                                              cancelSelectActivity, selectedActivity,
                                              openForm, closeForm, editMode,

                                          }: Props) {
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}

                />
            </Grid>
            <Grid size={5}>
                {/*//conditional rendering*/}
                {selectedActivity && !editMode &&
                    <ActivityDetail
                        selectedActivity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />
                }

                {editMode &&
                    <ActivityForm
                        closeForm = {closeForm}
                        activity={selectedActivity}
                    />
                }
            </Grid>
        </Grid>
    )
}