'use server'

import {Room} from "@/types/room";

export async function getRooms(): Promise<Room[]> {
    const res = fetch('https://j1wj0v602a.execute-api.eu-central-1.amazonaws.com/v1/room', {
        headers: {
            "x-api-key": "YWw5ML13Bg5ZtACQj8CY13UjTifzc4vqjdnQUel8"
        },
        cache: 'no-cache'
    })
        .then(response => response.json())
        .then((data: Room[]) => {
            return data;
        })
    await new Promise<Room[]>(resolve => setTimeout(resolve, 3000));
    return res;
}

export async function createRoom(name: string): Promise<Room[]> {
    const postParam = {
        method: 'PUT',
        headers: {
            "x-api-key": "YWw5ML13Bg5ZtACQj8CY13UjTifzc4vqjdnQUel8"
        },
        body: JSON.stringify({
            name,
            id: Math.random().toString(),
            desks: []
        })
    };
    console.log(postParam);
    return fetch('https://j1wj0v602a.execute-api.eu-central-1.amazonaws.com/v1/room', postParam)
        .then(response => response.json())
        .then((data: any) => {
            console.log("data", data);
            return data;
        });
}
