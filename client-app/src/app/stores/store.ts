import { createContext, useContext } from "react";
import ActivityStore from "./ActivityStore";

interface Store{
    activityStore: ActivityStore //property
}

export const store: Store ={ //Store type object
    activityStore: new ActivityStore()
}

export const StoreContext = createContext(store); //react Context;

export function useStore(){
    return useContext(StoreContext);
}