import {Reservation} from "@/types/reservation";

export interface Desk {
    name: string;
    reservations: Reservation[];
}
