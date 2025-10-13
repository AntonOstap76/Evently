import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

import agent from "../api/agent.ts";

//custom hook
// return data but call it activities
export const useActivities = (id?: string) => {

    const queryClient = useQueryClient();

    //UseQuery for fetching data
    const {data: activities, isPending} = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('/activities');

            return response.data
        }
    });

    const {data: activity, isLoading: isLoadingActivity} = useQuery({
        queryKey: ['activities', id],
        queryFn: async () => {
            const response = await agent.get<Activity>(`/activities/${id}`)
            return response.data
        },
        enabled: !!id //cast id to boolean
    })

    // useMutation for updating the data
    const updateActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            await agent.put<Activity>('/activities', activity);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['activities'], // define a key of a query to invalidate

            });
        }
    });

    const createActivity = useMutation({
        mutationFn: async (activity: Activity) => {
           const response =  await agent.post<Activity>('/activities', activity);
           return response.data
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['activities'], // define a key of a query to invalidate

            });
        }
    });

    const deleteActivity = useMutation({
        mutationFn: async (id: string) => {
            await agent.delete<Activity>(`/activities/${id}`);
        },
        onSuccess: async () => {
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
        deleteActivity,
        activity,
        isLoadingActivity
    };
}