import {Box, Button, CircularProgress, Paper, Typography} from "@mui/material";
import {useActivities} from "../../../lib/hooks/useActivities.tsx";
import {Link, useNavigate, useParams} from "react-router";
import {useForm,type Resolver } from "react-hook-form";
import {useEffect} from "react";
import {activitySchema, type ActivitySchema} from "../../../lib/schemas/activitySchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import TextInput from "../../../shared/components/TextInput.tsx";
import SelectInput from "../../../shared/components/SelectInput.tsx";
import {categoryOptions} from "./categoryOptions.ts";
import DateTimeInput from "../../../shared/components/DateTimeInput.tsx";
import LocationInput from "../../../shared/components/LocationInput.tsx";



export default function ActivityForm() {
    const {reset, control, handleSubmit} = useForm<ActivitySchema>({
        mode: 'onTouched',
        resolver: zodResolver(activitySchema)  as Resolver<ActivitySchema>
    });

    const navigate = useNavigate();

    const {id} = useParams();
    const {updateActivity, createActivity, activity, isLoadingActivity} = useActivities(id);

    useEffect(() => {
        if (activity) reset({
            ...activity,
            location:{
                city: activity.city,
                venue: activity.venue,
                latitude: activity.latitude,
                longitude: activity.longitude
            }
        })
    }, [activity, reset]);


    // for handle input values from form
    const onSubmit = async (data: ActivitySchema) => {
        const {location, ...rest} = data;
        const flattenedData = {...rest, ...location} as Activity;
        try{
            if(activity){
                updateActivity.mutate({...activity, ...flattenedData}, {
                    onSuccess: ()=> navigate(`/activities/${activity.id}`)
                });
            }else{
                createActivity.mutate(flattenedData, {
                    onSuccess: (id)=> navigate(`/activities/${id}`)
                })
            }
            console.log(flattenedData);
            
        }catch(error){
            console.log(error);
        }
    }

    if (isLoadingActivity) return <CircularProgress size="3rem"/>

    return (
        <Paper sx={{borderRadius: 3, padding: 3}} elevation={3} variant="outlined">
            <Typography variant="h5" gutterBottom color="primary">
                {activity ? 'Edit activity' : 'Create activity'}
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} display="flex" flexDirection="column" gap={3}>

                <TextInput label="Title" control={control} name='title'/>
                <TextInput label="Description" control={control} name='description' multiline rows={4}/>
                <Box display="flex" gap={3}>
                    <SelectInput items={categoryOptions} label="Category" control={control} name='category'/>
                    <DateTimeInput label="Date" control={control} name='date'/>
                </Box>

                <LocationInput control={control} label="Enter the location" name="location"/>


                <Box display="flex" justifyContent="end" gap={3}>
                    <Button component={Link} to={'/activities/'} color="inherit" variant="outlined">Cancel</Button>
                    <Button type="submit"
                            color="success"
                            variant="outlined"
                            disabled={updateActivity.isPending || createActivity.isPending}
                    >Submit</Button>
                </Box>
            </Box>
        </Paper>
    )
}