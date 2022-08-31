import { Position } from "@/models/Position";

export type EnvironmentInfo = {
    Base: Position,
    Parede: Position[],
    Te: number,
    Ts: number,
    Vitimas: Position[],
    XMax: number,
    YMax: number
};