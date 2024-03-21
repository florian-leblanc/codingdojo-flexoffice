import { Desk } from "@/types/desk";

export interface Room {
    id: string;
    name: string;
    desks: Desk[];
}
