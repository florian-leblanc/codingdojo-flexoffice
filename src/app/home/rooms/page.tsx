import styles from "@/app/page.module.css";
import {getRooms} from "@/app/home/rooms/actions";
import {Room} from "@/types/room";
import {Desk} from "@/types/desk";
import {Reservation} from "@/types/reservation";
import { FormRoom } from "./form-room";
export default async function Rooms() {
    const rooms: Room[] = await getRooms();
    console.log('rooms',rooms)
    async function addRoom() {
        'use server';
        const newRoom = {
            name: "new room",
            desks: []
        };
        console.log(newRoom);
    }

    return (
        <>
            <h1>Rooms</h1>
            <FormRoom />
            <ul>
                {rooms.map((room: Room) => (
                    <li key={room?.id}>
                        <h3>{room?.name}</h3>
                        <ul>
                            {room?.desks?.map((desk: Desk) => (
                                <li key={desk.name}>
                                    <h4>{desk.name}</h4>
                                    <ul>
                                        {desk.reservations.map((reser: Reservation) => (
                                            <li key={reser.person}>
                                                <h4>{reser.person}</h4>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}
