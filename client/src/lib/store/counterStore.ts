import { makeAutoObservable} from "mobx";

export default class CounterStore{
    title =  'Counter store';
    count =4;
    events: string[]=[
        `Initial Count is ${this.count}`
    ]

    constructor (){
        // makeObservable(this, {
        //     title: observable,
        //     count: observable,
        //     increment: action,
        //     decrement: action,
        // })

        //better way than previous
        makeAutoObservable(this)
    }

    increment =(amount=1)=>{
        this.count += amount;
        this.events.push(`Incremented by ${amount} -  count now is ${this.count}`);
    }

    decrement = (amount=1)=>{
        this.count -=amount;
        this.events.push(`Decremented by ${amount} -  count now is ${this.count}`);
    }

    //computed property
    //get every time events gets updated by action increment and decrement
    get eventCount(){
        return this.events.length
    }

}