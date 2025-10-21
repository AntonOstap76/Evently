import axios from "axios";
import {store} from "../store/store.ts";
import {toast} from "react-toastify";
import {router} from "../../router/Routes.tsx";

const sleep = (delay: number) => {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

//axios config
const agent = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

agent.interceptors.request.use(config => {
    store.uiStore.isBusy();
    return config;
})

//utilize interceptors
//simulate fake delay
agent.interceptors.response.use(
    async response => {
        await sleep(1000);
        store.uiStore.isIdle();
        return response;
    },
    async error => {
        await sleep(1000);
        store.uiStore.isIdle();

        const {status, data} = error.response;
        switch (status) {
            case 400:
                if (data.errors) {
                    const modalStateErrors = [];
                    for (const key in data.errors) {
                        if(data.errors[key]){
                            modalStateErrors.push(data.errors[key]);
                        }
                    }
                    throw  modalStateErrors.flat();
                }
                else{
                    toast.error(data);
                }
                break;
            case 401:
                toast.error('Unauthorized request');
                break;
            case 404:
                router.navigate('/not-found')
                break;
            case 500:
                router.navigate('/server-error', {state:{error: data}})
                break;
        }
        //rethrow the error to react query to handle
        return Promise.reject(error);
    }
);

export default agent;