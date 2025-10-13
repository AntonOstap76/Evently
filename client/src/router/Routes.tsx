import {createBrowserRouter} from "react-router";
import {App} from "../app/layout/App.tsx";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard.tsx";
import HomePage from "../features/home/HomePage.tsx";
import ActivityForm from "../features/activities/form/ActivityForm.tsx";
import ActivityDetailPage from "../features/activities/details/ActivityDetailPage.tsx";
import Counter from "../features/counter/Counter.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>, //parent route for app
        children: [
            {path: '', element: <HomePage/>},
            {path: 'activities', element: <ActivityDashboard/>},
            {path: 'createActivity', element: <ActivityForm key='create'/>},
            {path: 'activities/:id', element: <ActivityDetailPage/>},
            {path: 'edit/:id', element: <ActivityForm/>},
            {path: 'counter', element: <Counter/>}
        ]
    }
])