import {createBrowserRouter} from "react-router";
import {App} from "../app/layout/App.tsx";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard.tsx";
import HomePage from "../features/home/HomePage.tsx";
import ActivityForm from "../features/activities/form/ActivityForm.tsx";
import ActivityDetail from "../features/activities/details/ActivityDetail.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>, //parent route for app
        children: [
            {path: '', element: <HomePage/>},
            {path: 'activities', element: <ActivityDashboard/>},
            {path: 'createActivity', element: <ActivityForm key='create'/>},
            {path: 'activities/:id', element: <ActivityDetail/>},
            {path: 'edit/:id', element: <ActivityForm/>}
        ]
    }
])