'use client'

import {createRoom} from "@/app/home/rooms/actions";
import {FormEvent} from "react";

export async function FormRoom() {

    const createNewRoom = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name: string = formData.get("name") as string;
        await createRoom(name);
    }

    return (
            <form onSubmit={createNewRoom}>
            <input type="text" name="name"/>
            <button type="submit">Create room</button>
        </form>
    )
}
