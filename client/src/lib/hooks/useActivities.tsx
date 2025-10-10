import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

import agent from "../api/agent.ts";

//custom hook
// return data but call it activities
export const useActivities = () => {

    const queryClient = useQueryClient();

    //UseQuery for fetching data
    const {data: activities, isPending} = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('/activities');
            return response.data
        }
    });

    // useMutation for updating the data
    const updateActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            await agent.put<Activity>('/activities', activity);
        },
        onSuccess: async ()=>{
            await queryClient.invalidateQueries({
                queryKey: ['activities'], // define a key of a query to invalidate

            });
        }
    });

    const createActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            await agent.post<Activity>('/activities', activity);
        },
        onSuccess: async ()=>{
            await queryClient.invalidateQueries({
                queryKey: ['activities'], // define a key of a query to invalidate

            });
        }
    });

    const deleteActivity = useMutation({
        mutationFn: async(id:string)=>{
            await agent.delete<Activity>(`/activities/${id}`);
        },
        onSuccess: async()=>{
            await queryClient.invalidateQueries({
                queryKey: ['activities'],
            });
        }
    });

    return {
        activities,
        isPending,
        updateActivity,
        createActivity,
        deleteActivity
    };
}