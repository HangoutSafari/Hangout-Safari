import { writable } from "svelte/store"

export const createSearchStore = (data)=>{
    const{subscribe, set, update} = writable({
        data: data,
        filtered: data, 
        search: ""
    })

    return {
        set, 
        update,
        subscribe
    }
}

export const searchHandler = (store: any) =>{
    const searchTerm = store.search.toLowerCase() || "";
    store.filtered = store.data.filter((item)=>{
        return (item.searchProperties as string).toLowerCase().includes(searchTerm);
    })
}