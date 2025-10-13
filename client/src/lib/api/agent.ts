import axios from "axios";
import {store} from "../store/store.ts";

const sleep =(delay:number)=>{
    return new Promise(resolve=>{
        setTimeout(resolve, delay);
    });
}

//axios config
const agent = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

agent.interceptors.request.use(config =>{
    store.uiStore.isBusy();
    return config;
})

//utilize interceptors
//simulate fake delay
agent.interceptors.response.use(async response =>{
    try {
        await sleep(1000);
        store.uiStore.isIdle();
        return response;
    }
    catch (error){
        console.log(error)
        return Promise.reject(error)
    }
    finally {
        store.uiStore.isIdle();
    }
});

export default agent;